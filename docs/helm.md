# HELM 
Helm Installation
- Debug Helm Install Upgrade command for Govstack sandbox
```
helm upgrade bp-frontend ./helm --install --create-namespace --namespace bp --dry-run --debug
``````

- Install chart
```
helm upgrade bp-frontend ./helm --install --create-namespace --namespace bp
``` 

- Uninstall chart
```
helm uninstall bp-frontend --namespace bp
```
