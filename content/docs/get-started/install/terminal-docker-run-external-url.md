---
title: Terminal Docker Run with External URL
---

```bash
docker run --init \
  --name bytebase \
  --restart always \
  --publish 5678:8080 \
  --health-cmd "curl --fail http://localhost:5678/healthz || exit 1" \
  --health-interval 5m \
  --health-timeout 5m \
  --volume ~/.bytebase/data:/var/opt/bytebase \
  bytebase/bytebase:%%bb_version%% \
  --data /var/opt/bytebase \
  --port 8080 \
  # Use `host.docker.internal` as the host if you connect the pg instance on the same host.
  --pg postgresql://user:secret@host:port/dbname
```
