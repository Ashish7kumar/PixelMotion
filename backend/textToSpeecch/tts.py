import sys

import modal

app = modal.App("example-hello-world")
@app.function()
def f():
    print("Hello Modal")

@app.local_entrypoint()
def main():
    f.remote()
    f.local()
    # run the function locally
    

