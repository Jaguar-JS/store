import { Injectable } from '@nestjs/common'
import { path } from 'app-root-path'
import { IFileResponse } from './file.interface'
import { ensureDir, writeFile } from 'fs-extra'

@Injectable()
export class FileService {

	saveFiles = async (
		files: Express.Multer.File[],
		folder = 'default'
	): Promise<IFileResponse[]> => {

		const uploadFolder = `${path}/uploads/${folder}`
		await ensureDir(uploadFolder)

		const res:IFileResponse[] = await Promise.all(
			files.map(async file=>{
				await writeFile(
					`${uploadFolder}/${file.originalname}`,
					file.buffer
				)
				return {
					url: `/uploads/${folder}/${file.originalname}`,
					name: file.originalname
				}
			})
		)

return res
	}
}

