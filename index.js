import {
  CopyObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const bucket = "s3-copy-object-issue-demo";
const filename = "demo-file-with-£-symbol-in-filename.txt";
const initialPrefix = "putObject";
const newPrefix = "copyObject";
const region = "eu-west-1";

const s3Client = new S3Client({ region });

const putObjectCommand = new PutObjectCommand({
  Body: "test",
  Bucket: bucket,
  Key: `${initialPrefix}/${filename}`,
});

const putObjectResponse = await s3Client.send(putObjectCommand);
console.log({ putObjectResponse });

const copyObjectCommand = new CopyObjectCommand({
  Bucket: bucket,
  CopySource: `${bucket}/${initialPrefix}/${filename}`,
  Key: `${newPrefix}/${filename}`,
});

const copyObjectResponse = await s3Client.send(copyObjectCommand);
console.log({ copyObjectResponse });
