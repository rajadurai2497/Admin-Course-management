export interface AllCourse {
    courseMasterId: string;
    courseName: string;
    courseAmount: string;
    description: string;
    provideWhat: string;
    learnersNumber: string;
}

export interface AddCourse {
    basicContent: string;
    courseName: string;
    abtCourse: string;
    weprovide: string;
    price: number;
}
export class AddChapter {
    courseMasterId: string;
    chapterEntityObj: ChapterEntity;
    slideEntityOb: SlideEntity[] = [];
    constructor() {

    }
}

export class SlideEntity {
    slideId: string;
    chapterId: string;
    slideName: string;
    videoUrl: string;
    description: string;
    constructor() {

    }
}

export class ChapterEntity {
    chapterId: string;
    courseMasterId: string;
    chapterName: string;
    constructor() {

    }
}