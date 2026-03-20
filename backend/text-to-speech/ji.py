import os
from pathlib import Path

from dotenv import load_dotenv

# Load env relative to this file so it works regardless of where you run `python` from.
env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(env_path)

print(os.getenv("MODAL_KEY"))
print(os.getenv("MODAL_SECRET"))