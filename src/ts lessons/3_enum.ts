//enum - доп сущность для однотипных данных
// влияет на конечную компиляцию

enum MemberShip {
    Simple, //по умолчанию присваивается 0 и вниз 1, 2 ..
    Standart,
    Premium
}

const memberShip = MemberShip.Standart // будет 1 значение по умолчанию

const reverseMemberShip = MemberShip[2] // будет после компиляции стринг Premium


enum SocialMedia {
    VK = "VK",
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM //INSTAGRAM string



