import multer from 'multer';

class MulterConfig {
    static config(){
        const storage = multer.diskStorage({
            destination: (cb, req, file) => {

            },

            filename: (cb, req, file) => {

            }
        });
       multer( {storage : storage } ).single('files');
    }
}

export default MulterConfig;