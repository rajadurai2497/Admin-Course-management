export interface PurchasedCourseDetails {
    courseMasterId: string,
    courseName: string,
    totalchapters:string,
    completedchapters:string,
    pendingchapters:string
}
export interface PurchasedChapterDetails{  
chapterId: string;
chapterName: string;
courseMasterId: string;
markCompleted: boolean;
orderNo: string;
}

export interface ChapterDetails{  
completedChapter: string;
courseMasterId: string;
courseName: string;
pendingChapter: string;
totalChapter: string;
}