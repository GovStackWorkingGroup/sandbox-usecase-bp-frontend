# Construction Permit Front End Demo configuration
The Construction permit Demo uses the [RPC Backend](https://github.com/GovStackWorkingGroup/sandbox-app-rpc-backend)'s implementation for data storage.<br>
The address to data provider is set in the `.env` environment variables file located [here](../.env) as:

```
VITE_API_ENDPOINT="https://rpc-backend.dev.sandbox-playground.com"
```

If we want to run the RPC Backend locally we have to set the value for the `VITE_API_ENDPOINT` variable such as 

``` 
VITE_API_ENDPOINT="http://localhost:{PORT}"
```
where `{PORT}` is replaced by the locally running Backend's port.