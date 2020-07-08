export interface AllCourse {
    courseMasterId: string;
    courseName: string;
    courseAmount: string;
    description: string;
    provideWhat: string;
    learnersNumber: string;
}

export class AddCourse {
    basicContent: string;
    courseName: string;
    abtCourse: string;
    weprovide: string;
    price: number;
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
    fileAddFlag: string
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
    constructor() {

    }
}

// export class slideEntityObj {

//     slideId: string;
//     chapterId: string;
//     slideName: string;
//     slideDescription: string;
//     videoUrl: string;
//     fileAddFlag: true;
//     orderNo: string;
// }

// export class chapterEntityObj {
//     chapterId: string;
//     courseMasterId: string;
//     chapterName: string;
//     orderNo: string;
//     markCompleted: true;
//     slides: slideEntityObj[];
//     constructor() {

//     }
// }



  


