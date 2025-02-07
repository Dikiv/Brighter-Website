type reviews ={
   
        id: any;
        title: any;
        score: any;
        releaseyear: any;
        genres: {
            id: any;
            genre: {
                    id: number;
                    genre: string;
                }
        }[];
   
} []


export default reviews
