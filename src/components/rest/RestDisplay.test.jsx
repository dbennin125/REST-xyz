import React from 'react';
import { shallow } from 'enzyme';
import RestDisplay from './RestDisplay';

describe('RestDisplay component', () => {
  it('renders RestDisplay', () => {
    // dummy data made with https://www.json-generator.com/
    const wrapper = shallow(<RestDisplay display={[[
      {
        '_id': '5f18a0a13cce36f6147d183f',
        'index': 0,
        'guid': '45231932-d4f3-4dac-8c76-80be824324fc',
        'isActive': true,
        'balance': '$1,549.43',
        'picture': 'http://placehold.it/32x32',
        'age': 27,
        'eyeColor': 'brown',
        'name': 'Georgia Monroe',
        'gender': 'female',
        'company': 'VORTEXACO',
        'email': 'georgiamonroe@vortexaco.com',
        'phone': '+1 (930) 469-3750',
        'address': '540 Pooles Lane, Rodanthe, Maine, 8008',
        'about': 'Laborum ex occaecat nisi cillum Lorem laboris. Aute dolore sit officia reprehenderit sit exercitation. Aute nulla aute in occaecat dolor velit reprehenderit minim. Eu enim cupidatat sint voluptate aliqua sunt deserunt consectetur tempor. Lorem sit in dolore eu ipsum elit ex esse cupidatat sit.\r\n',
        'registered': '2016-12-26T05:35:08 +08:00',
        'latitude': -30.246735,
        'longitude': 47.252219,
        'tags': [
          'magna',
          'eu',
          'reprehenderit',
          'id',
          'proident',
          'eiusmod',
          'ullamco'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Rosalind Conley'
          },
          {
            'id': 1,
            'name': 'Reynolds Bartlett'
          },
          {
            'id': 2,
            'name': 'Darla Fernandez'
          }
        ],
        'greeting': 'Hello, Georgia Monroe! You have 7 unread messages.',
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5f18a0a19ccd1cf9f6f1b7f4',
        'index': 1,
        'guid': '99bee783-0f2e-44b5-8ac3-fc7cae8bd373',
        'isActive': false,
        'balance': '$1,818.19',
        'picture': 'http://placehold.it/32x32',
        'age': 28,
        'eyeColor': 'blue',
        'name': 'Hyde Patrick',
        'gender': 'male',
        'company': 'ZIALACTIC',
        'email': 'hydepatrick@zialactic.com',
        'phone': '+1 (838) 414-3336',
        'address': '525 Croton Loop, Greer, Michigan, 9813',
        'about': 'Deserunt enim ad do fugiat do excepteur sunt dolor do quis culpa ea tempor. Adipisicing voluptate id aliqua nisi culpa anim ad labore aliquip voluptate. Sunt do eu laboris ad elit cillum ad ullamco quis ea est laboris. Culpa sint nostrud consectetur amet nulla. Deserunt anim quis aute laboris est.\r\n',
        'registered': '2016-10-29T07:58:56 +07:00',
        'latitude': -68.898311,
        'longitude': 138.543202,
        'tags': [
          'culpa',
          'irure',
          'ea',
          'enim',
          'dolor',
          'qui',
          'reprehenderit'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Tate Silva'
          },
          {
            'id': 1,
            'name': 'Kaufman Graves'
          },
          {
            'id': 2,
            'name': 'Anne Simmons'
          }
        ],
        'greeting': 'Hello, Hyde Patrick! You have 4 unread messages.',
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5f18a0a19283a68da0f481a2',
        'index': 2,
        'guid': '2eb5a5ae-2acc-4554-acc3-12f143b79431',
        'isActive': true,
        'balance': '$1,277.81',
        'picture': 'http://placehold.it/32x32',
        'age': 32,
        'eyeColor': 'blue',
        'name': 'Debora Pittman',
        'gender': 'female',
        'company': 'REMOTION',
        'email': 'deborapittman@remotion.com',
        'phone': '+1 (971) 511-3514',
        'address': '207 Leonard Street, Bangor, Federated States Of Micronesia, 1699',
        'about': 'Qui adipisicing est pariatur dolore excepteur aliquip laboris minim velit consequat elit laboris. Eu qui eiusmod eu incididunt ex. Enim consequat veniam commodo ipsum qui tempor consectetur voluptate anim sint proident adipisicing ut. Ut ipsum sit adipisicing sint duis ut Lorem mollit occaecat ad sit. Enim dolor ut labore Lorem culpa ea est magna proident. Duis do ullamco proident aliquip et pariatur labore laborum ex elit consectetur. Cillum cillum enim enim reprehenderit anim dolor nostrud est.\r\n',
        'registered': '2018-01-23T08:27:31 +08:00',
        'latitude': -10.399879,
        'longitude': 24.564549,
        'tags': [
          'ea',
          'voluptate',
          'mollit',
          'ea',
          'aliqua',
          'incididunt',
          'cupidatat'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Letitia Hammond'
          },
          {
            'id': 1,
            'name': 'Conrad Burris'
          },
          {
            'id': 2,
            'name': 'Coffey Gaines'
          }
        ],
        'greeting': 'Hello, Debora Pittman! You have 2 unread messages.',
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5f18a0a1b40b5ff3ddb81eda',
        'index': 3,
        'guid': 'd24bd01f-d5a7-4911-8ce7-a695026a52b0',
        'isActive': false,
        'balance': '$1,592.29',
        'picture': 'http://placehold.it/32x32',
        'age': 32,
        'eyeColor': 'blue',
        'name': 'Aline Holder',
        'gender': 'female',
        'company': 'KONNECT',
        'email': 'alineholder@konnect.com',
        'phone': '+1 (908) 556-2214',
        'address': '596 Celeste Court, Alafaya, Minnesota, 8833',
        'about': 'Reprehenderit sunt ea adipisicing dolor id ex nostrud irure voluptate. Eiusmod sunt dolor deserunt minim esse in. Nulla labore dolore ipsum aute minim incididunt ad. Laborum aute ut esse exercitation Lorem deserunt culpa esse aliquip nulla sunt.\r\n',
        'registered': '2016-03-29T07:07:49 +07:00',
        'latitude': -37.368602,
        'longitude': 19.933944,
        'tags': [
          'occaecat',
          'duis',
          'ut',
          'voluptate',
          'ea',
          'culpa',
          'sunt'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Winnie Cortez'
          },
          {
            'id': 1,
            'name': 'Castillo Craig'
          },
          {
            'id': 2,
            'name': 'Alejandra Duran'
          }
        ],
        'greeting': 'Hello, Aline Holder! You have 6 unread messages.',
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5f18a0a18882e51db5607ec7',
        'index': 4,
        'guid': '3e24c6f1-d571-4212-8acc-0d7c7132ec33',
        'isActive': false,
        'balance': '$1,266.20',
        'picture': 'http://placehold.it/32x32',
        'age': 23,
        'eyeColor': 'blue',
        'name': 'White Hinton',
        'gender': 'male',
        'company': 'GOGOL',
        'email': 'whitehinton@gogol.com',
        'phone': '+1 (987) 449-3435',
        'address': '650 Polar Street, Zeba, Utah, 4749',
        'about': 'Magna proident est ut reprehenderit ea anim irure est fugiat deserunt minim tempor commodo. Irure amet pariatur laborum cillum exercitation id ipsum minim sit amet enim Lorem consequat reprehenderit. Quis qui anim sunt sunt commodo reprehenderit sit cillum irure exercitation consectetur. Amet velit cillum magna adipisicing non qui esse dolor eiusmod nostrud. Incididunt elit excepteur reprehenderit est Lorem proident elit enim enim do sunt. Ullamco amet ipsum cillum occaecat ullamco culpa est aliquip. Est ut ipsum velit esse sint ex dolor irure occaecat labore.\r\n',
        'registered': '2019-05-06T12:06:26 +07:00',
        'latitude': -72.002564,
        'longitude': -88.40018,
        'tags': [
          'eiusmod',
          'dolore',
          'laborum',
          'dolore',
          'cupidatat',
          'ad',
          'adipisicing'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Flowers Cash'
          },
          {
            'id': 1,
            'name': 'Mosley Cole'
          },
          {
            'id': 2,
            'name': 'Karina Aguilar'
          }
        ],
        'greeting': 'Hello, White Hinton! You have 7 unread messages.',
        'favoriteFruit': 'banana'
      },
      {
        '_id': '5f18a0a1111060ee21327918',
        'index': 5,
        'guid': '988f4afd-44aa-417f-9131-02a5d9e053eb',
        'isActive': false,
        'balance': '$1,782.61',
        'picture': 'http://placehold.it/32x32',
        'age': 33,
        'eyeColor': 'brown',
        'name': 'Josefa Stafford',
        'gender': 'female',
        'company': 'XYQAG',
        'email': 'josefastafford@xyqag.com',
        'phone': '+1 (896) 464-2188',
        'address': '744 Lott Place, Castleton, Northern Mariana Islands, 6714',
        'about': 'Deserunt aliqua exercitation nulla dolor. Incididunt qui cillum exercitation culpa. Quis est ad et dolor incididunt cupidatat ipsum eiusmod dolore.\r\n',
        'registered': '2015-02-12T02:09:02 +08:00',
        'latitude': -53.044947,
        'longitude': -136.307932,
        'tags': [
          'incididunt',
          'dolor',
          'commodo',
          'consectetur',
          'laboris',
          'tempor',
          'nostrud'
        ],
        'friends': [
          {
            'id': 0,
            'name': 'Marcia Padilla'
          },
          {
            'id': 1,
            'name': 'Hardin Parrish'
          },
          {
            'id': 2,
            'name': 'Vang Small'
          }
        ],
        'greeting': 'Hello, Josefa Stafford! You have 1 unread messages.',
        'favoriteFruit': 'strawberry'
      }
    ]]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
