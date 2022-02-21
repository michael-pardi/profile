import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ProfilePage = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(process.env.PUBLIC_URL + '/resume.pdf');
    const textColor = '#bbaa99';

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <div style={{ color: textColor }} >
            <Box sx={{ mt: 10, mx: 'auto' }}>
                <Typography variant="h3" component="div" gutterBottom>Michael Pardi</Typography>
                <Typography variant="h4" component="div" gutterBottom>Software Engineer</Typography>
            </Box>
        </div>
    )
}

export default ProfilePage;