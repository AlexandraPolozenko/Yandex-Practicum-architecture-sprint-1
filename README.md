**Структура проекта**

Фронтенд разделен на 3 микрофронтенда: авторизация, профиль пользователя и работа с фотографиями.
В директориях src и public оставила общие компоненты для других микрофронтов, а так же основные блоки для отображение (header, footer и пр).

1. Авторизация.  auth-microfrontend
Первый логический блок - это страничка авторизации, где пользователь вводит свои данные и заходит в сервис. Туда вошли компоненты Login и Register.
Из общих библиотек они используют только react и react-dom. Предполагаю, что в будущем могут еще и использовать контекст, чтобы запоминать пользователя.

2. Профиль пользователя. profile-microfrontend
Профиль пользователя - это та часть, где можно посмотреть его аватарку, поредактировать имя и описание. Туда вошли компоненты EditAvatarPopup, EditProfilePopup.
Из общих библиотек они используют react, PopupWithForm, CurrentUserContext.

3. Работа с фотографиями. cards-microfrontend
Туда входит просмотр картинок, их добавление, удаление, а так же лайки/дизлайки. Туда вошли компоненты AddPlacePopup, Card.
Из общих библиотек они используют react, PopupWithForm, CurrentUserContext.


frontend/webpack.config.js - конфигурация хоста
frontend/cards-microservice/webpack.config.js, frontend/profile-microservice/webpack.config.js, frontend/auth-microservice/webpack.config.js - 
конфигурации удаленных модулей

**Почему так?**

Все три модуля могут существовать независимо друг от друга. Авторизация не знает ничего про описание профиля или фотографии в нем, для отображения 
ленты фотографий не нужна информация о профиле, так же как и профиль можно будет просматривать независимо от фотографий. Предполагаю, что в дальнейшем
эти три модуля можно будет развивать независимо друг от друга, например сделать профиль отдельно страничкой, где можно будет добавлять место работы, дату
рождения, подписываться на изменения конкретного пользователя и подобное.


**Выбор технологий**

В реальном проекте я бы выбрала ту технологию, какую бы лучше знала команда и с которой был больший опыт работы и в команде, и в самой компании.
Сейчас выбрала webpack, чтобы было удобней работать с общими библиотеками (например PopupWithForm).


**Дополнительно**

Файлы CardsApp, CardsMain и прочие не редактировала (копипаста с App и Main). В работе сфокусировалась только на том, чтобы разложить 
компоненты по соотетствующим директориям.
