/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload } from "antd";
import axios from "axios";

const UploadImages: React.FC<{fileList:any[], setFileList:Dispatch<SetStateAction<any[]>> }> = ({fileList,setFileList}) => {

//upload 
const [isDisabled, setIsDisabled] = React.useState(false);

const handleUpload = async (selectedFile: File) => {
  try {
    const formData = new FormData();
    formData.append('file',selectedFile); // Giả sử selectedFile chứa file đã chọn

    const response = await axios.post('/file/upload', formData);
    const { url } = response.data;
    
    setFileList(fileList => [...fileList, { path: url }]);

    // Sử dụng file path đã nhận được
    console.log('File path:', url);
  } catch (error) {
    console.error(error);
  }
};

const handleFileChange = ({ file, fileList: newFileList }: any, event:any) => {
  const selectedFile = event.target.files[0];
  
  handleUpload(selectedFile);

  setFileList(newFileList);
  if (newFileList.length > 1) {
    setIsDisabled(true);
  }

  if (file.status !== "uploading") {
    console.log("File uploaded successfully", file, newFileList);
    // console.log('fileUpload',fileUpload)
  }
};
 
  const props: UploadProps = {
    name: "file",
    action: `http://localhost:3000/file/upload`,
    multiple: true,
    accept: "image/*",
    onChange: ()=>handleFileChange,


  };
  
  return (
    <Upload {...props}> 
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
  
  };

export default UploadImages;
