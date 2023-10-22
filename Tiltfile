load("ext://helm_resource", "helm_resource")
load("ext://restart_process", "docker_build_with_restart")

docker_build_with_restart(
    "frontend",
    ".",
    entrypoint="yarn prod",
    live_update=[
        sync("src", "/app/src"),
    ],
)

image_deps = ["frontend"]
image_keys = [("image.repository", "image.tag")]

helm_resource(
    "frontend",
    "./helm",
    flags=[],
    image_deps=image_deps,
    image_keys=image_keys,
    port_forwards=["3000:3000","3001:3001"],
    labels=["services"],
)