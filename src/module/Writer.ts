
import IFileWriter from '../interface/IFileWriter'

export default class Writer {

    protected writer
    constructor(writer: IFileWriter) {
        this.writer = writer
    }


    write(filepath : string) : boolean {
        return this.writer.write(filepath)
    }
}