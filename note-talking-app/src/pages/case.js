import {Component} from 'react';
import React from 'react';
import ReactDOM from 'react';
import axios from 'axios'
import qs from 'qs';
import { Upload, Icon, message} from 'antd';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Case extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };
 customRequest=(f)=>{
	      let formData = new FormData()
		  console.log(f.file)
	      formData.append('file', f.file)
			console.log(formData)
	      axios({
	        method: 'post',
	        url: 'http://localhost:2020/pic/upimg',
	        data:formData
	      }).then(res =>{
	           //上传成功之后 显示图片
			   console.log(res.data.url)
	          // this.imageUrl = res.data.url
			  this.setState({
				  imageUrl:res.data.url
			  })
	      })
	    }
		
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://localhost:2020/pic/upimg"
		customRequest={this.customRequest}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}

export default Case;