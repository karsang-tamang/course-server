require("dotenv").config();
const { 
  S3Client, 
  PutObjectCommand, 
  GetObjectCommand 
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// Initialize S3 Client targeting Backblaze B2
const s3 = new S3Client({
  endpoint: process.env.B2_ENDPOINT,
  region: process.env.B2_REGION,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY
  }
});

const bucket = process.env.B2_BUCKET;

// Upload file buffer to Backblaze
async function uploadFile(key, body, contentType) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: contentType
  });
  await s3.send(command);
}

// Generate temporary presigned download URL
async function getFileUrl(filename, expiresIn = 600) {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: filename
  });
  return await getSignedUrl(s3, command, { expiresIn });
}

module.exports = { uploadFile, getFileUrl };