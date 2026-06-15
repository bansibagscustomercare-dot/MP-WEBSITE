"""One-off image generation script for MP Industries hero & page banners.
Uses Gemini Nano Banana via emergentintegrations + EMERGENT_LLM_KEY.
Outputs PNG files into /app/frontend/public/images/
"""
import asyncio
import base64
import os
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

OUT_DIR = Path("/app/frontend/public/images")
OUT_DIR.mkdir(parents=True, exist_ok=True)

IMAGES = [
    {
        "filename": "hero-parts.png",
        "prompt": (
            "Ultra photorealistic product photography, top-down 3/4 angle hero composition: "
            "an arrangement of heavy industrial concrete mixer machine parts laid out on a "
            "dark brushed steel surface — a large cast iron mixer drum and yoke at center, "
            "bronze bevel gears with sharp teeth, a polished steel ring gear, a heavy pinion "
            "shaft, ball bearings and pulleys, a forged clutch arm. Materials: cast iron, "
            "machined steel, bronze. Lighting: low key dramatic side lighting, warm rim light, "
            "deep shadows, cinematic. Industrial mood, premium look. No text, no logos, no "
            "people. 4k, high detail, sharp focus on metallic surfaces, depth of field. "
            "Color palette: charcoal, gunmetal, copper, with subtle warm red-orange highlights."
        ),
    },
    {
        "filename": "header-products.png",
        "prompt": (
            "Photorealistic industrial manufacturing facility interior — close-up of a "
            "workbench with concrete mixer machine gears, bevel gears, cast iron drum "
            "components, steel shafts and bearings laid out. Workshop background blurred — "
            "lathes, drill presses, sparks of a CNC machine. Dramatic moody lighting, deep "
            "shadows, warm tungsten highlights catching the metal. Dark teal and amber tones. "
            "Editorial wide composition, 16:5 banner aspect. No text, no people. 4k."
        ),
    },
    {
        "filename": "header-about.png",
        "prompt": (
            "Cinematic aerial drone view of a mid-sized industrial manufacturing facility in "
            "Ahmedabad, India during golden hour. Long rectangular factory sheds with "
            "corrugated metal roofs, neat truck yard, warehouses, surrounding palm trees and "
            "an arterial road in the distance. Warm golden light from low sun, long shadows, "
            "soft haze in the air. Indian industrial estate aesthetic. Editorial wide "
            "composition, 16:5 banner aspect. Professional, premium, photorealistic. 4k. "
            "No text, no logos."
        ),
    },
    {
        "filename": "header-contact.png",
        "prompt": (
            "Photorealistic interior of a clean modern industrial showroom / reception area. "
            "Warm timber floor, a polished concrete feature wall, a long reception desk in "
            "dark walnut, soft pendant lights, neat glass display shelves on the right showing "
            "mechanical parts. Warm amber lighting from the ceiling lamps, soft daylight from "
            "a tall window on the left. Premium industrial B2B aesthetic. Wide editorial "
            "composition, 16:5 banner aspect. No people, no text. 4k, sharp, depth of field."
        ),
    },
]


async def gen_one(item):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    chat = (
        LlmChat(
            api_key=api_key,
            session_id=f"mp-{item['filename']}",
            system_message="You generate premium photorealistic industrial product imagery.",
        )
        .with_model("gemini", "gemini-3.1-flash-image-preview")
        .with_params(modalities=["image", "text"])
    )
    msg = UserMessage(text=item["prompt"])
    text, images = await chat.send_message_multimodal_response(msg)
    out = OUT_DIR / item["filename"]
    if images:
        out.write_bytes(base64.b64decode(images[0]["data"]))
        size = out.stat().st_size
        print(f"✓ {item['filename']}  ({size//1024} KB)")
    else:
        print(f"✗ {item['filename']} — no image returned. Text: {text[:120]}")


async def main():
    for item in IMAGES:
        try:
            await gen_one(item)
        except Exception as e:
            print(f"ERR {item['filename']}: {e}")


if __name__ == "__main__":
    asyncio.run(main())
