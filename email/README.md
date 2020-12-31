# Deploying to cloud function

```
gcloud functions deploy sendgridDemo --trigger-http --entry-point=sendgridCF \
--region=us-central1 --runtime=nodejs10 --set-env-vars API_KEY='123'
```
