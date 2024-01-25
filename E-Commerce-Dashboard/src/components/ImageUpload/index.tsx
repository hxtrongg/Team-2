/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload } from "antd";

const UploadImages: React.FC<{
  fileList: any[];
  setFileList: Dispatch<SetStateAction<any[]>>;
}> = ({ fileList, setFileList }) => {
  //upload
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);


  const handleFileChange = ({ file, fileList: newFileList }: any) => {
    setFileList(newFileList);
    if (newFileList.length > 1) {
      setIsDisabled(true);
    }
    if (file.status !== "uploading") {
      console.log("File uploaded successfully", file, newFileList);
    }
  };  
  

  const props: UploadProps = {
    name: "file",
    action: `http://localhost:3000/file/upload`,
    method: "POST",
    multiple: true,
    accept: "image/*",
    onChange: handleFileChange,
  };
  
  
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadImages;
