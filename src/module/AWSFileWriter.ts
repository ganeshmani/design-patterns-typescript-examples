import IFileWriter from '../interface/IFileWriter'

export default class AWSWriterWrapper implements IFileWriter {

    write() {
        console.log("Writing File to AWS S3")
        return true
    }
}