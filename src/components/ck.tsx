import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-classic-plus";

export default function MyEditor() {
    const [article, setArticle] = useState<any>();

    console.log(article);


    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <CKEditor
                editor={ClassicEditor}
                data={article}
                onReady={(editor: any) => {
                    // You can store the "editor" and use when it is needed.
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setArticle(data);
                }}
                config={{
                    simpleUpload: {
                        // The URL that the images are uploaded to.
                        uploadUrl: "/",

                        // Enable the XMLHttpRequest.withCredentials property if required.
                        withCredentials: true,

                        // Headers sent along with the XMLHttpRequest to the upload server.
                        headers: {
                            "X-CSRF-TOKEN": "CSFR-Token",
                            Authorization: "Bearer [JSON Web Token]"
                        }
                    }
                }}


            />
            <div>

                <p style={{ marginTop: "50px" }}> Content</p>
                <div dangerouslySetInnerHTML={{ __html: article }} />
            </div>
        </div>
    );
}