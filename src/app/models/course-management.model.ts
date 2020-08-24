export class AllCourse {
    courseMasterId: string;
    courseName: string;
    courseAmount: number;
    description: string;
    provideWhat: string;
    dicountAmount:number;
    learnersNumber: string;
    language: string;
    constructor() { }
}

export class AddCourse {
    courseMasterId: string;
    basicContent: string;
    courseName: string;
    abtCourse: string;
    weprovide: string;
    price: number;
    dicountAmount:number;
    language: string;
    constructor() { }
}
export class AddChapter {
    courseMasterId: string;
    chapterEntityObj: ChapterEntity;
    slideEntityObj: SlideEntity[] = [];
    constructor() {

    }
}

export class SlideEntity {
    slideId: string;
    chapterId: string;
    slideName: string;
    videoUrl: string;
    slideDescription: string;
    orderNo: number;
    fileAddFlag: string;
    slideAttachments?: SlideAttachement[];
    constructor() {

    }
}

export class ChapterEntity {
    chapterId: string;
    courseMasterId: string;
    chapterName: string;
    orderNo: number;
    markCompleted: boolean;
    slides: SlideEntity[];
    no: number;
    constructor() {

    }
}

export class SlideAttachement {
    chapterSlideAttachementExactName: string;
    chapterSlideAttachementFilePath: string;
    chapterSlideAttachementFileType: string;
    chapterSlideAttachementId: number;
    chapterSlideAttachementImageName: string;
    chapterSlideAttachementName: string;
    slideId: number;
    virtualPath: string;
    constructor() {

    }
}