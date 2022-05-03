import { P2, Post1, Post2 } from '@assets/images';

export const data = [
  {
    key: '_p1', title: 'linn_doepop',
    description: 'Mollit velit laboris rem velit Lorem veniam do pariatur exercitation enim aliquip.',
    editor: { name: "mirza_umr", pic: P2 },
    image: Post1,
    likes: '1.2k',
    dislikes: 100,
    created_at: '27 MIN AGO', // FIXME
    comments: [
      {
        key: '_c1',
        commentor: { name: "merk_doop" },
        message: "Lorem veniam do partur exation enim aliquip."
      },
      {
        key: '_c2',
        commentor: { name: "merk_doop" },
        message: "Lorem veniam do partur exation enim aliquip."
      },
      {
        key: '_c3',
        commentor: { name: "merk_doop" },
        message: "Lorem veniam do partur exation enim aliquip."
      },
    ]
  },
  {
    key: '_p1', title: 'linn_doepop',
    description: 'Mollit velit laboris rem velit Lorem veniam do pariatur exercitation enim aliquip.',
    editor: { name: "mirza_umr", pic: P2 },
    image: Post2,
    likes: '1.2k',
    dislikes: 100,
    created_at: '27 MIN AGO', // FIXME
    comments: [
      {
        key: '_c1',
        commentor: { name: "merk_doop" },
        message: "Lorem veniam do partur exation enim aliquip."
      }
    ]
  },

] 
