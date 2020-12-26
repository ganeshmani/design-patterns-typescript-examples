import IFileWriter from '../interface/IFileWriter'

export default class DiskWriter implements IFileWriter {

    write(filepath : string) {
        console.log("Writing File to Disk",filepath)
        return true
    }
}