import React, {Component} from 'react'
import Swal from 'sweetalert2';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            showConfirmAlert: false
        }
    }
    submit() {
        // alert("Submit!");
        Swal.fire("發表成功", "由於此版本為測試版本，因此無法發表到論壇上！", 'success');
    }
    render() {
        return (
            <div className="p-4">
                <p className="w-full flex text-2xl font-bold text-gray-800">發表貼文</p>
                <div className="mt-4">
                    <label className="inline-block float-left text-gray-800" htmlFor="image">照片</label>
                    <div className="image-upload-box">
                        <input
                            id="image"
                            className="border rounded-sm w-full p-2 text-gray-800"
                            type="text"/>
                    </div>
                </div>
                <div className="input-box w-full mt-4 block">
                    <label className="inline-block float-left text-gray-800" htmlFor="nickname">暱稱</label>
                    <input
                        id="nickname"
                        className="border rounded-sm w-full p-2 text-gray-800"
                        type="text"/>
                </div>
                <div className="input-box w-full mt-4 block">
                    <label className="inline-block float-left text-gray-800" htmlFor="title">標題</label>
                    <input
                        id="title"
                        className="border rounded-sm w-full p-2 text-gray-800"
                        type="text"/>
                </div>
                <div className="input-box w-full mt-4 block">
                    <label className="inline-block float-left text-gray-800" htmlFor="content">內容</label>
                    <textarea
                        id="content"
                        className="border rounded-sm w-full p-2 text-gray-800"
                        cols="10"
                        rows="10"></textarea>
                </div>
                <div className="input-box w-full mt-4 block">
                    <button
                        className="border border-blue-500 font-bold text-blue-500 rounded-sm w-full p-2"
                        onClick={() => {
                        this.submit();
                    }}>
                        提交
                    </button>
                </div>
            </div>
        )
    }
}

export default Post;
