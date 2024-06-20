import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DrafJs = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState?.createEmpty(),
    );
    return (
        <div>

        aaa
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
            />
        </div>

    );
};

export default DrafJs;