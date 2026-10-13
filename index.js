import {
  CopyObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "eu-west-1",
});

const putObjectCommand = new PutObjectCommand({
  Body: "test",
  Bucket: "copy-object-issue-demo-bucket",
  Key: "putObject/demo-file-with-£-symbol-in-filename.txt",
});

const putObjectResponse = await s3Client.send(putObjectCommand);
console.log({ putObjectResponse });

const copyObjectCommand = new CopyObjectCommand({
  Bucket: "copy-object-issue-demo-bucket",
  CopySource: "putObject/demo-file-with-£-symbol-in-filename.txt",
  Key: "copyObject/demo-file-with-£-symbol-in-filename.txt",
});

const copyObjectResponse = await s3Client.send(copyObjectCommand);
console.log({ copyObjectResponse });
