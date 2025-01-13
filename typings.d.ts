interface SanityBody { 
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;}

    interface Image extends SanityBody {

        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
        
    }

    export interface PageInfo extends SanityBody {

        _type: 'pageInfo';
        backgroundInformation: string;
        address: string;
        email: string;
        role: string;
        heroImage: Image;
        name: string;
        phoneNumber: string;
        profilePic: Image;
    }

    export interface Technology extends SanityBody {
        _type: 'skill';
        title: string;
        image: Image;

        
    }

    export interface Skill extends SanityBody {
        _type: 'skill';
        title: string;
        image: Image;
        progress: number;
    }



    export interface Project extends SanityBody {
        _type: 'project';
        title: string;
        technologies: Technology[];
        summary: string;
        linkToBuild: string;
        image: Image;
    }

    export interface Experience extends SanityBody {
        _type: 'experience';
        company: string;
        companyImage: Image;
        jobTitle: string;
        isCurrentlyWorkingHere: boolean;
        dateStarted: string;
        dateEnded: date;
        points: string[];
        technologies: Technology[];
    }


    export interface Social extends SanityBody {
        _type: 'social';
        title: string;
        url: string;}



    