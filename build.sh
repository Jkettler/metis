#!/usr/bin/env bash
(cd frontend && exec npm run build) && docker-compose up --remove-orphans -d --build