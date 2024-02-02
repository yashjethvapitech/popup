import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


export default function Quill() {
   const [content, setContent] = useState('');


   const quillModules = {
     toolbar: [
        
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        [{ color: [] }],
        ['code-block'],
        ['clean'],
     ],
   };


   const quillFormats = [
     'header',
     'bold',
     'italic',
     'underline',
     'strike',
     'blockquote',
     'list',
     'bullet',
     'link',
     'image',
     'align',
     'color',
     'code-block',
   ];


   const handleEditorChange = (newContent) => {
     setContent(newContent);
   };


   return (
     
        
          <>
            <span class="line">
              <h2><span>Corrective Actions</span></h2>
            </span>
             <QuillEditor
               value={content}
               onChange={handleEditorChange}
               modules={quillModules}
               formats={quillFormats}
               style={{display: "flex",flexDirection: "column-reverse",height:"450px"}}
             />
          </>
     
   );
}