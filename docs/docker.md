# DOCKER
Build Docker image:
```
docker image build -t bp-frontend:latest .
```

Docker Run:
```
docker run --name  bp-frontend -p 12000:8080 -d bp-frontend:latest
```

