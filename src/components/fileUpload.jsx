"use client"
import React from 'react';
import { Upload } from 'lucide-react';

const FileUpload = () => {

    const handleFileUploadClick = () => {
        const ele = document.createElement('input');
        ele.setAttribute("type", "file");
        ele.setAttribute("accept", "application/pdf");
        ele.click();
        ele.addEventListener("change", (e) => {
            if (ele.files && ele.files.length > 0) {
                const file = ele.files[0];
            }
        })
    }

    return (
        <div className='bg-slate-400 border-2 rounded-lg p-4 cursor-pointer' onClick={handleFileUploadClick}>
            <div className='flex flex-col items-center justify-center' >
                <h3>Upload Pdf here...</h3>
                <Upload />
            </div>
        </div>
    )
}

export default FileUpload
