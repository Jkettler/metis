#!/usr/bin/env bash
(cd frontend && (exec npm install) && npm run build) && docker-compose up --remove-orphans -d --build && (cd frontend && (exec npm run server))