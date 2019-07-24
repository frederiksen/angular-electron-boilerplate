export class DtoSystemInfo {
    public Os: string;
    public Mem: number;

    public static deserialize(jsonString: string): DtoSystemInfo {
        const dto: DtoSystemInfo = JSON.parse(jsonString);
        return dto;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}
