import { Button, Form, Input } from "antd";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const [text, setText] = useState("");
  const { imagePaths } = useSelector((state) => state.post);

  const dispatch = useDispatch("");
  const imageInput = useRef();

  const onsubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: "10px 0 20px" }} onFinish={onsubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" style={{ display: "none" }} ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹쨱
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src="y" style={{ width: "200px" }} alt="y" />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
