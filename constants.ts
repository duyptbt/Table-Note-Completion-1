import { ReadingModule, QuestionType } from './types';

export const READING_MODULES: ReadingModule[] = [
  {
    id: 1,
    title: "Reading 1: The best cities in the world",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    content: `In a recent internet survey, tourists and business travellers were asked to rate 50 cities around the world, from the best to the worst. Of the top three cities, two were in Europe and one was in Australia.

In third place was London, scoring highly mainly because it was the most famous city on the list of 50 surveyed. It was also seen as a very good place to do business, and was an important cultural centre. However, it lost points because people believed it was an extremely expensive place to live.

Sydney was also a very popular destination, achieving second place on the list because people believed it had the friendliest inhabitants, as well as the best standard of living and the nicest climate. It failed to make the top spot, however, because people thought there were very few things to see there, and many also thought it was too far away from other business and cultural centres.

At the top of the list was Paris. Despite problems such as the large amount of traffic, it beat other cities to first place because people considered it to be the most interesting city, with more museums, art galleries and places of interest than anywhere else. People also thought it was the best city to take a holiday in.`,
    sections: [
      {
        id: "r1-vocab",
        title: "Vocabulary Search",
        instruction: "Find words or phrases in the passage which have a similar meaning to the words below.",
        questions: [
          {
            id: "q1_excellent",
            type: QuestionType.TEXT_INPUT,
            label: "excellent",
            instruction: "Find a synonym for 'excellent'",
            correctAnswer: ["very good", "very good place"],
            placeholder: "...",
            explanation: "Đoạn văn mô tả London là một nơi 'very good' (rất tốt) để kinh doanh."
          },
          {
            id: "q1_very",
            type: QuestionType.TEXT_INPUT,
            label: "very",
            instruction: "Find a synonym for 'very'",
            correctAnswer: "extremely",
            placeholder: "...",
            explanation: "Đoạn văn nêu rằng mọi người tin rằng London là một nơi 'extremely' (cực kỳ) đắt đỏ để sống."
          },
          {
            id: "q1_residents",
            type: QuestionType.TEXT_INPUT,
            label: "residents",
            instruction: "Find a synonym for 'residents'",
            correctAnswer: "inhabitants",
            placeholder: "...",
            explanation: "Đoạn văn đề cập rằng Sydney được tin là có những 'inhabitants' (cư dân) thân thiện nhất."
          },
          {
            id: "q1_quality_life",
            type: QuestionType.TEXT_INPUT,
            label: "quality of life",
            instruction: "Find a synonym for 'quality of life'",
            correctAnswer: "standard of living",
            placeholder: "...",
            explanation: "Đoạn văn nói rằng Sydney có 'standard of living' (chất lượng cuộc sống) tốt nhất."
          },
          {
            id: "q1_most_pleasant",
            type: QuestionType.TEXT_INPUT,
            label: "most pleasant",
            instruction: "Find a synonym for 'most pleasant'",
            correctAnswer: "nicest",
            placeholder: "...",
            explanation: "Đoạn văn mô tả Sydney là nơi có khí hậu 'nicest' (dễ chịu nhất)."
          },
          {
            id: "q1_not_many",
            type: QuestionType.TEXT_INPUT,
            label: "not many",
            instruction: "Find a synonym for 'not many'",
            correctAnswer: "very few",
            placeholder: "...",
            explanation: "Mọi người nghĩ rằng có 'very few' (rất ít) thứ để xem ở Sydney."
          },
          {
            id: "q1_a_lot",
            type: QuestionType.TEXT_INPUT,
            label: "a lot",
            instruction: "Find a synonym for 'a lot'",
            correctAnswer: "large amount",
            placeholder: "...",
            explanation: "Paris có những vấn đề như là 'large amount' (lượng lớn) giao thông."
          }
        ]
      },
      {
        id: "r1-table",
        title: "Table Completion",
        instruction: "Complete the table. Choose ONE word from the passage for each answer.",
        questions: [
          {
            id: "q1_london_pos",
            type: QuestionType.TEXT_INPUT,
            instruction: "London Overall Position",
            label: "1.",
            correctAnswer: ["third", "3rd"],
            placeholder: "...............",
            explanation: "Đoạn thứ hai bắt đầu bằng: 'In third place was London' (Ở vị trí thứ ba là London)."
          },
          {
            id: "q1_london_adv",
            type: QuestionType.TEXT_INPUT,
            instruction: "London Advantage",
            label: "2.",
            correctAnswer: "business",
            placeholder: "...............",
            explanation: "London được xem là một nơi rất tốt để làm 'business' (kinh doanh)."
          },
          {
            id: "q1_london_dis",
            type: QuestionType.TEXT_INPUT,
            instruction: "London Disadvantage",
            label: "3.",
            correctAnswer: "expensive",
            placeholder: "...............",
            explanation: "Mọi người tin rằng London là một nơi cực kỳ 'expensive' (đắt đỏ) để sống."
          },
          {
            id: "q1_sydney_adv1",
            type: QuestionType.TEXT_INPUT,
            instruction: "Sydney Advantage 1",
            label: "4.",
            correctAnswer: "friendliest",
            placeholder: "...............",
            explanation: "Sydney được tin là có những cư dân 'friendliest' (thân thiện nhất)."
          },
          {
            id: "q1_sydney_adv2",
            type: QuestionType.TEXT_INPUT,
            instruction: "Sydney Advantage 2",
            label: "5.",
            correctAnswer: "climate",
            placeholder: "...............",
            explanation: "Sydney cũng được ghi nhận là có 'climate' (khí hậu) dễ chịu nhất."
          },
          {
            id: "q1_paris_pos",
            type: QuestionType.TEXT_INPUT,
            instruction: "Paris Overall Position",
            label: "6.",
            correctAnswer: ["first", "1st"],
            placeholder: "...............",
            explanation: "Đoạn văn nêu: 'At the top of the list was Paris' và nó đánh bại các thành phố khác để giành 'first place' (vị trí đầu tiên)."
          },
          {
            id: "q1_paris_adv",
            type: QuestionType.TEXT_INPUT,
            instruction: "Paris Advantage",
            label: "7.",
            correctAnswer: "interesting",
            placeholder: "...............",
            explanation: "Mọi người coi Paris là thành phố 'interesting' (thú vị) nhất."
          },
          {
            id: "q1_paris_dis",
            type: QuestionType.TEXT_INPUT,
            instruction: "Paris Disadvantage",
            label: "8.",
            correctAnswer: "traffic",
            placeholder: "...............",
            explanation: "Paris có những vấn đề như lượng lớn 'traffic' (xe cộ)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Reading 2: A city survey with a difference",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=80",
    content: `There are many websites on the Internet which provide lists of the world's best cities to visit, live or work in. These lists usually grade the cities in order, from 'best' to 'worst', and are based on facts and figures provided by local or national organisations.

The City Brands Index (CBI) also provides a list of best and worst cities. However, unlike other surveys, it is based on the idea that cities are <u>similar to</u> products in shops. It asks ordinary people in other countries to grade cities in the same way that they would grade a product, like a soft drink or a car. What is particularly different about the CBI is that the people who take part in the survey may not have ever visited the cities. Instead, they are asked to say what they think the cities are like, basing their opinions on things like news stories, magazine articles or television programmes they have heard or seen.

<u>Each</u> year, about 10,000 people in 20 countries take part in the CBI survey, and they grade a <u>total</u> of 50 cities. They do this by filling in an online questionnaire. There are <u>several</u> categories in the survey. These include things like the economy, education, the environment, local culture, climate and what the city's residents are like.

The CBI list is <u>useful</u> because it helps people choose a good place to live, <u>find work</u> or take a holiday. It also helps <u>regional</u> governments to understand why people and businesses are, or are not, coming to their cities, and so shows them areas which they could develop or improve.`,
    sections: [
      {
        id: "r2-vocab",
        title: "Vocabulary Matching",
        instruction: "Match the words (1-7) underlined in the passage with their synonyms (a-g).",
        questions: [
          {
            id: "q2_similar",
            type: QuestionType.DROPDOWN,
            label: "1. similar to",
            instruction: "Match 'similar to'",
            correctAnswer: "e",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "Đoạn văn nói 'cities are similar to products', nghĩa là chúng 'like' (giống như) các sản phẩm."
          },
          {
            id: "q2_each",
            type: QuestionType.DROPDOWN,
            label: "2. each",
            instruction: "Match 'each'",
            correctAnswer: "b",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "'Each year' đồng nghĩa với 'Every year' (Mỗi năm)."
          },
          {
            id: "q2_total",
            type: QuestionType.DROPDOWN,
            label: "3. total",
            instruction: "Match 'total'",
            correctAnswer: "g",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "Họ chấm điểm một 'total' (tổng số) gồm 50 thành phố, ngụ ý một con số 'maximum' (tối đa)."
          },
          {
            id: "q2_several",
            type: QuestionType.DROPDOWN,
            label: "4. several",
            instruction: "Match 'several'",
            correctAnswer: "a",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "'Several' (một vài) danh mục chỉ ra 'a number of' (một số) danh mục."
          },
          {
            id: "q2_useful",
            type: QuestionType.DROPDOWN,
            label: "5. useful",
            instruction: "Match 'useful'",
            correctAnswer: "d",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "Danh sách CBI thì 'useful' hoặc 'helpful' (hữu ích) cho những người đang chọn nơi sinh sống."
          },
          {
            id: "q2_find_work",
            type: QuestionType.DROPDOWN,
            label: "6. find work",
            instruction: "Match 'find work'",
            correctAnswer: "c",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "Cụm từ 'find work' (tìm việc) đồng nghĩa với 'get a job' (nhận việc)."
          },
          {
            id: "q2_regional",
            type: QuestionType.DROPDOWN,
            label: "7. regional",
            instruction: "Match 'regional'",
            correctAnswer: "f",
            options: [
              { value: "a", label: "a. a number of" },
              { value: "b", label: "b. every" },
              { value: "c", label: "c. get a job" },
              { value: "d", label: "d. helpful" },
              { value: "e", label: "e. like" },
              { value: "f", label: "f. local" },
              { value: "g", label: "g. maximum" }
            ],
            explanation: "'Regional' governments (Chính quyền khu vực) ám chỉ chính quyền 'local' (địa phương)."
          }
        ].filter((q, index, self) => index === self.findIndex((t) => t.id === q.id))
      },
      {
        id: "r2-notes",
        title: "Note Completion",
        instruction: "Complete the notes below. Choose ONE WORD OR A NUMBER from the passage for each answer.",
        questions: [
          {
            id: "q2_notes_1",
            type: QuestionType.TEXT_INPUT,
            instruction: "The CBI believes that cities are like...",
            label: "1.",
            context: "The CBI believes that cities are like",
            postContext: "which people can buy when they go shopping.",
            correctAnswer: "products",
            placeholder: "...",
            explanation: "Đoạn văn nói rằng các thành phố tương tự như 'products' (sản phẩm) trong cửa hàng."
          },
          {
            id: "q2_notes_2",
            type: QuestionType.TEXT_INPUT,
            instruction: "Surveys take place every...",
            label: "2.",
            context: "Surveys take place every",
            postContext: ".",
            correctAnswer: "year",
            placeholder: "...",
            explanation: "Đoạn văn bắt đầu với 'Each year...', nghĩa là cuộc khảo sát diễn ra 'every year' (hàng năm)."
          },
          {
            id: "q2_notes_3",
            type: QuestionType.TEXT_INPUT,
            instruction: "A maximum of...",
            label: "3.",
            context: "A maximum of",
            postContext: "cities are included in the survey.",
            correctAnswer: "50",
            placeholder: "number",
            explanation: "Đoạn văn nêu rằng họ chấm điểm 'total of 50 cities' (tổng cộng 50 thành phố)."
          },
          {
            id: "q2_notes_4",
            type: QuestionType.TEXT_INPUT,
            instruction: "A number of different...",
            label: "4.",
            context: "A number of different",
            postContext: "are included in the survey.",
            correctAnswer: "categories",
            placeholder: "...",
            explanation: "Có 'several categories' (một vài danh mục) trong cuộc khảo sát."
          },
          {
            id: "q2_notes_5",
            type: QuestionType.TEXT_INPUT,
            instruction: "People who are trying to decide where to...",
            label: "5.",
            context: "people who are trying to decide where to",
            postContext: "or get a job.",
            correctAnswer: "live",
            placeholder: "...",
            explanation: "Danh sách giúp mọi người chọn một nơi tốt để 'live' (sống)."
          },
          {
            id: "q2_notes_6",
            type: QuestionType.TEXT_INPUT,
            instruction: "People who are looking for a good...",
            label: "6.",
            context: "people who are looking for a good",
            postContext: "destination.",
            correctAnswer: "holiday",
            placeholder: "...",
            explanation: "Danh sách giúp mọi người chọn một nơi để 'take a holiday' (đi nghỉ mát)."
          },
          {
            id: "q2_notes_7",
            type: QuestionType.TEXT_INPUT,
            instruction: "local...",
            label: "7.",
            context: "local",
            postContext: "who want to make their city a better place.",
            correctAnswer: "governments",
            placeholder: "...",
            explanation: "Đoạn văn đề cập đến 'regional governments' (chính quyền khu vực), hay chính quyền địa phương."
          }
        ]
      }
    ]
  }
];