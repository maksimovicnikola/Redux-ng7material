
export class Contact {
    ImageAvatarSource: string;
    ImageAvatarTitle: string;
    Name: string;
    Born: Date;
    Bio: string;

    constructor(ImageAvatarSource?: string, ImageAvatarTitle?: string, Name?: string, Born?: Date, Bio?: string) {
        this.ImageAvatarSource = ImageAvatarSource;
        this.ImageAvatarTitle = ImageAvatarTitle;
        this.Name = Name;
        this.Born = Born;
        this.Bio = Bio;
    }
}