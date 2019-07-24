export class DtoSystemInfo {
    public Arch: string;
    public Hostname: string;
    public Platform: string;
    public Release: string;

    public static deserialize(jsonString: string): DtoSystemInfo {
        const dto: DtoSystemInfo = JSON.parse(jsonString);
        return dto;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}
