default: help

.PHONY: help build test

help:
	@echo "Available targets:"
	@echo "  help    show this message"
	@echo "  build  create a docker image"

aws-registry-auth:
	aws ecr get-login-password \
		--region us-east-1 \
	| docker login \
		--username AWS \
		--password-stdin 382942022480.dkr.ecr.us-east-1.amazonaws.com

build:
	docker build -t frontend:local .
