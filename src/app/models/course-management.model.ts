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
export interface AddChapter {
    courseMasterId: string;
    chapterEntityObj: ChapterEntityOb;
    slideEntityOb: SlideEntityOb[];
}

export interface SlideEntityOb {
    slideId: string;
    chapterId: string;
    slideName: string;
    videoUrl: string;
}
export interface ChapterEntityOb {
    chapterId: string;
    courseMasterId: string;
    chapterName: string;
}