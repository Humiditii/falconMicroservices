import { Router } from 'express';
import multerConfig from '../middleware/multerCofig';
import File from '../model/FileModel';

const updateRoute = Router();

updateRoute.put('/api/v1/files/:db_id/:cloud_id', multerConfig.config, async (req, res) => {
   
    const {db_id} = req.params; 
    const getFile = await File.findById( const getFile = await File.findById();

    const { file } = req;
    return res.statis(201).json({
        status: 201,
        message: 'File updated'
    })
});


export default updateRoute;