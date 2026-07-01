var STORAGE_KEY = 'eventpro_data';

function getDefaultData() {
    return {
        venues: [
            {
                id: 'v1',
                name: 'Grand Hall',
                address: 'ул. Центральная, 15, Москва',
                capacity: 200,
                pricePerHour: 15000,
                features: ['wifi', 'projector', 'sound', 'stage'],
                image: '🏛',
                rating: 4.7,
                reviews: 42
            },
            {
                id: 'v2',
                name: 'Loft Space',
                address: 'пер. Творческий, 7, Санкт-Петербург',
                capacity: 80,
                pricePerHour: 8000,
                features: ['wifi', 'kitchen', 'parking'],
                image: '🏭',
                rating: 4.5,
                reviews: 28
            },
            {
                id: 'v3',
                name: 'Garden Terrace',
                address: 'ул. Парковая, 23, Сочи',
                capacity: 120,
                pricePerHour: 12000,
                features: ['sound', 'parking', 'stage'],
                image: '🌿',
                rating: 4.8,
                reviews: 35
            },
            {
                id: 'v4',
                name: 'Business Center',
                address: 'пр. Ленина, 45, Екатеринбург',
                capacity: 50,
                pricePerHour: 6000,
                features: ['wifi', 'projector', 'parking'],
                image: '🏢',
                rating: 4.2,
                reviews: 18
            },
            {
                id: 'v5',
                name: 'Art Gallery',
                address: 'ул. Арбат, 12, Москва',
                capacity: 60,
                pricePerHour: 9500,
                features: ['wifi', 'sound', 'stage'],
                image: '🎨',
                rating: 4.6,
                reviews: 31
            },
            {
                id: 'v6',
                name: 'Seaside Resort',
                address: 'наб. Морская, 8, Геленджик',
                capacity: 150,
                pricePerHour: 18000,
                features: ['wifi', 'sound', 'parking', 'accommodation'],
                image: '🏖',
                rating: 4.9,
                reviews: 56
            }
        ],
        contractors: [
            {
                id: 'c1',
                name: 'Анна Иванова',
                category: 'photographer',
                phone: '+7 999 123-45-67',
                email: 'anna@photo.ru',
                rating: 4.8,
                price: 25000,
                description: 'Свадебный и репортажный фотограф. Работаю с 2015 года.',
                reviews: 47
            },
            {
                id: 'c2',
                name: 'Catering Pro',
                category: 'catering',
                phone: '+7 999 234-56-78',
                email: 'info@cateringpro.ru',
                rating: 4.5,
                price: 35000,
                description: 'Кейтеринг для мероприятий любого уровня. Широкий выбор меню.',
                reviews: 39
            },
            {
                id: 'c3',
                name: 'DJ Max',
                category: 'dj',
                phone: '+7 999 345-67-89',
                email: 'max@dj.ru',
                rating: 4.9,
                price: 18000,
                description: 'Профессиональный диджей с 10-летним стажем.',
                reviews: 63
            },
            {
                id: 'c4',
                name: 'Студия Декор',
                category: 'decor',
                phone: '+7 999 456-78-90',
                email: 'decor@studio.ru',
                rating: 4.7,
                price: 22000,
                description: 'Оформление мероприятий. Цветы, шары, ткани, свет.',
                reviews: 44
            },
            {
                id: 'c5',
                name: 'Владимир Смирнов',
                category: 'entertainer',
                phone: '+7 999 567-89-01',
                email: 'vlad@show.ru',
                rating: 4.6,
                price: 20000,
                description: 'Ведущий корпоративов и свадеб. Шоу-программы и конкурсы.',
                reviews: 52
            },
            {
                id: 'c6',
                name: 'Флорист Виктория',
                category: 'florist',
                phone: '+7 999 678-90-12',
                email: 'vika@flowers.ru',
                rating: 4.9,
                price: 15000,
                description: 'Букеты, композиции, оформление цветами.',
                reviews: 58
            },
            {
                id: 'c7',
                name: 'Video Production',
                category: 'videographer',
                phone: '+7 999 789-01-23',
                email: 'video@prod.ru',
                rating: 4.4,
                price: 28000,
                description: 'Видеосъемка мероприятий. Монтаж, клипы, фильмы.',
                reviews: 27
            },
            {
                id: 'c8',
                name: 'Транс-Сервис',
                category: 'transport',
                phone: '+7 999 890-12-34',
                email: 'trans@service.ru',
                rating: 4.3,
                price: 12000,
                description: 'Транспорт для гостей. Автобусы, лимузины, такси.',
                reviews: 22
            }
        ],
        checklists: [
            {
                id: 'cl1',
                title: 'Свадьба Анны и Сергея',
                eventDate: '2026-07-15',
                priority: 'high',
                tasks: [
                    { id: 't1', text: 'Заказать торт', done: true },
                    { id: 't2', text: 'Подтвердить список гостей', done: false },
                    { id: 't3', text: 'Согласовать меню с кейтерингом', done: false },
                    { id: 't4', text: 'Проверить звук в зале', done: false },
                    { id: 't5', text: 'Договориться с фотографом о времени', done: true },
                    { id: 't6', text: 'Заказать букет невесты', done: false }
                ]
            },
            {
                id: 'cl2',
                title: 'Корпоратив в Grand Hall',
                eventDate: '2026-08-20',
                priority: 'medium',
                tasks: [
                    { id: 't7', text: 'Заказать баннеры', done: true },
                    { id: 't8', text: 'Настроить проектор', done: true },
                    { id: 't9', text: 'Пригласить фотографа', done: false },
                    { id: 't10', text: 'Продумать программу вечера', done: false },
                    { id: 't11', text: 'Согласовать меню', done: true },
                    { id: 't12', text: 'Заказать призы для конкурсов', done: false }
                ]
            },
            {
                id: 'cl3',
                title: 'День рождения в Loft Space',
                eventDate: '2026-06-10',
                priority: 'low',
                tasks: [
                    { id: 't13', text: 'Купить шары и гирлянды', done: true },
                    { id: 't14', text: 'Заказать пиццу', done: true },
                    { id: 't15', text: 'Найти DJ', done: false },
                    { id: 't16', text: 'Составить плейлист', done: false },
                    { id: 't17', text: 'Предупредить гостей', done: true }
                ]
            },
            {
                id: 'cl4',
                title: 'Бизнес-форум 2026',
                eventDate: '2026-09-05',
                priority: 'high',
                tasks: [
                    { id: 't18', text: 'Подготовить презентации', done: false },
                    { id: 't19', text: 'Проверить проектор и экран', done: false },
                    { id: 't20', text: 'Заказать кофе-брейк', done: true },
                    { id: 't21', text: 'Разослать приглашения', done: true },
                    { id: 't22', text: 'Напечатать бейджи', done: false }
                ]
            },
            {
                id: 'cl5',
                title: 'Выпускной вечер',
                eventDate: '2026-06-25',
                priority: 'medium',
                tasks: [
                    { id: 't23', text: 'Найти ведущего', done: false },
                    { id: 't24', text: 'Заказать фотостудию', done: true },
                    { id: 't25', text: 'Согласовать меню', done: false },
                    { id: 't26', text: 'Купить подарки выпускникам', done: false },
                    { id: 't27', text: 'Оформить зал', done: false }
                ]
            }
        ]
    };
}

var data = loadData();

function loadData() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            var parsed = JSON.parse(stored);
            for (var i = 0; i < parsed.venues.length; i++) {
                if (parsed.venues[i].rating === undefined) parsed.venues[i].rating = 0;
                if (parsed.venues[i].reviews === undefined) parsed.venues[i].reviews = 0;
            }
            for (var j = 0; j < parsed.contractors.length; j++) {
                if (parsed.contractors[j].reviews === undefined) parsed.contractors[j].reviews = 0;
            }
            for (var k = 0; k < parsed.checklists.length; k++) {
                if (parsed.checklists[k].priority === undefined) parsed.checklists[k].priority = 'medium';
            }
            return parsed;
        } catch (e) {
            return getDefaultData();
        }
    }
    return getDefaultData();
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function getStarsHtml(rating, size) {
    size = size || '14px';
    var fullStars = Math.floor(rating);
    var halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    var emptyStars = 5 - fullStars - halfStar;
    
    var html = '';
    for (var i = 0; i < fullStars; i++) {
        html += '<span class="star active" style="font-size:' + size + ';">★</span>';
    }
    if (halfStar) {
        html += '<span class="star half" style="font-size:' + size + ';">★</span>';
    }
    for (var i = 0; i < emptyStars; i++) {
        html += '<span class="star" style="font-size:' + size + ';">★</span>';
    }
    return html;
}

function getClickableStars(rating, id, type, size) {
    size = size || '20px';
    var fullStars = Math.floor(rating);
    
    var html = '<div class="rating-clickable" data-id="' + id + '" data-type="' + type + '">';
    for (var i = 1; i <= 5; i++) {
        var active = i <= fullStars ? 'active' : '';
        html += '<span class="star ' + active + '" style="font-size:' + size + ';" data-value="' + i + '" onclick="setRating(\'' + id + '\',\'' + type + '\',' + i + ')">★</span>';
    }
    html += '</div>';
    return html;
}

function setRating(id, type, value) {
    var item = null;
    var list = [];
    
    if (type === 'venue') {
        list = data.venues;
    } else if (type === 'contractor') {
        list = data.contractors;
    }
    
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            item = list[i];
            break;
        }
    }
    
    if (!item) return;
    
    var oldTotal = item.rating * item.reviews;
    item.reviews = (item.reviews || 0) + 1;
    item.rating = Math.round(((oldTotal + value) / item.reviews) * 10) / 10;
    
    saveData();
    
    if (type === 'venue') {
        renderVenues();
        renderDashboard();
    } else if (type === 'contractor') {
        renderContractors();
        renderDashboard();
    }
    
    updateStats();
}

function navigateTo(page) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    var links = document.querySelectorAll('.sidebar nav a');
    for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('active');
    }

    var pageEl = document.getElementById('page-' + page);
    if (pageEl) pageEl.classList.add('active');

    var link = document.querySelector('.sidebar nav a[data-page="' + page + '"]');
    if (link) link.classList.add('active');

    if (page === 'dashboard') updateStats();
    if (page === 'venues') renderVenues();
    if (page === 'contractors') renderContractors();
    if (page === 'checklists') renderChecklists();
}

document.querySelectorAll('.sidebar nav a').forEach(function(link) {
    link.addEventListener('click', function() {
        var page = this.dataset.page;
        navigateTo(page);
    });
});

function updateStats() {
    document.getElementById('stat-venues').textContent = data.venues.length;
    document.getElementById('stat-contractors').textContent = data.contractors.length;
    document.getElementById('stat-checklists').textContent = data.checklists.length;
    renderDashboard();
}

function renderVenues() {
    var search = document.getElementById('venue-search').value.toLowerCase();
    var featureFilter = document.getElementById('venue-feature-filter').value;

    var filtered = data.venues.filter(function(v) {
        var matchName = v.name.toLowerCase().indexOf(search) !== -1;
        var matchFeature = featureFilter === '' || v.features.indexOf(featureFilter) !== -1;
        return matchName && matchFeature;
    });

    var container = document.getElementById('venues-list');

    if (filtered.length === 0) {
        container.innerHTML =
            '<div class="empty-state" style="grid-column: 1 / -1;">' +
            '<div class="icon">🏛</div>' +
            '<h3>Площадок не найдено</h3>' +
            '<p>Попробуйте изменить фильтры или добавьте новую площадку</p>' +
            '</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var v = filtered[i];
        var featuresHtml = '';
        for (var f = 0; f < v.features.length; f++) {
            featuresHtml += '<span class="tag">' + v.features[f] + '</span>';
        }
        
        var ratingHtml = getStarsHtml(v.rating || 0, '14px');
        var clickableRating = getClickableStars(v.rating || 0, v.id, 'venue', '18px');
        
        html +=
            '<div class="venue-card">' +
            '<div class="venue-image">' +
            (v.image || '🏛') +
            '</div>' +
            '<div class="venue-body">' +
            '<h3>' + v.name + '</h3>' +
            '<div class="address">' + v.address + '</div>' +
            '<div class="venue-rating">' +
            '<span class="stars">' + ratingHtml + '</span>' +
            '<span class="rating-value">' + (v.rating || 0).toFixed(1) + '</span>' +
            '<span class="rating-count">(' + (v.reviews || 0) + ')</span>' +
            '</div>' +
            '<div class="venue-details">' +
            '<span>Вместимость: ' + v.capacity + ' чел.</span>' +
            '<span>' + v.pricePerHour.toLocaleString() + ' ₽/час</span>' +
            '</div>' +
            '<div class="features">' + featuresHtml + '</div>' +
            '<div style="margin-top: 8px; font-size: 12px; color: #94a3b8;">Оценить:</div>' +
            '<div style="margin-bottom: 8px;">' + clickableRating + '</div>' +
            '<div class="card-actions">' +
            '<button class="btn btn-secondary btn-sm" onclick="editVenue(\'' + v.id + '\')">Редактировать</button>' +
            '<button class="btn btn-danger btn-sm" onclick="deleteVenue(\'' + v.id + '\')">Удалить</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;
}

function renderContractors() {
    var category = document.getElementById('contractor-category-filter').value;
    var search = document.getElementById('contractor-search').value.toLowerCase();

    var icons = {
        catering: '🍽',
        photographer: '📷',
        decor: '🎨',
        dj: '🎵',
        entertainer: '🎤',
        florist: '🌸',
        videographer: '🎥',
        transport: '🚗'
    };

    var filtered = data.contractors.filter(function(c) {
        var matchCategory = category === '' || c.category === category;
        var matchName = c.name.toLowerCase().indexOf(search) !== -1;
        return matchCategory && matchName;
    });

    var container = document.getElementById('contractors-list');

    if (filtered.length === 0) {
        container.innerHTML =
            '<div class="empty-state" style="grid-column: 1 / -1;">' +
            '<div class="icon">🔧</div>' +
            '<h3>Подрядчиков не найдено</h3>' +
            '<p>Попробуйте изменить фильтры или добавьте нового подрядчика</p>' +
            '</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var c = filtered[i];
        
        var ratingHtml = getStarsHtml(c.rating || 0, '14px');
        var clickableRating = getClickableStars(c.rating || 0, c.id, 'contractor', '18px');
        
        html +=
            '<div class="contractor-card">' +
            '<div class="icon">' + (icons[c.category] || '👤') + '</div>' +
            '<div class="info">' +
            '<h3>' + c.name + '</h3>' +
            '<div class="category">' + c.category + '</div>' +
            '<div class="venue-rating">' +
            '<span class="stars">' + ratingHtml + '</span>' +
            '<span class="rating-value">' + (c.rating || 0).toFixed(1) + '</span>' +
            '<span class="rating-count">(' + (c.reviews || 0) + ')</span>' +
            '</div>' +
            '<div class="description">' + (c.description || '') + '</div>' +
            '<div class="meta">' +
            '<span>' + c.price.toLocaleString() + ' ₽</span>' +
            '<span>' + c.phone + '</span>' +
            '<span>' + c.email + '</span>' +
            '</div>' +
            '<div style="margin-top: 6px; font-size: 12px; color: #94a3b8;">Оценить:</div>' +
            '<div style="margin-bottom: 6px;">' + clickableRating + '</div>' +
            '<div class="card-actions">' +
            '<button class="btn btn-secondary btn-sm" onclick="editContractor(\'' + c.id + '\')">Редактировать</button>' +
            '<button class="btn btn-danger btn-sm" onclick="deleteContractor(\'' + c.id + '\')">Удалить</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;
}

function renderChecklists() {
    var container = document.getElementById('checklists-list');

    if (data.checklists.length === 0) {
        container.innerHTML =
            '<div class="empty-state">' +
            '<div class="icon">✓</div>' +
            '<h3>Нет чек-листов</h3>' +
            '<p>Создайте первый чек-лист для вашего мероприятия</p>' +
            '</div>';
        return;
    }

    var priorityLabels = {
        high: 'Высокий',
        medium: 'Средний',
        low: 'Низкий'
    };

    var html = '';
    for (var i = 0; i < data.checklists.length; i++) {
        var cl = data.checklists[i];
        var tasksHtml = '';
        for (var t = 0; t < cl.tasks.length; t++) {
            var task = cl.tasks[t];
            tasksHtml +=
                '<div class="task">' +
                '<input type="checkbox" ' + (task.done ? 'checked' : '') +
                ' onchange="toggleTask(\'' + cl.id + '\',\'' + task.id + '\')">' +
                '<span class="task-text ' + (task.done ? 'done' : '') + '">' + task.text + '</span>' +
                '<button class="delete-task" onclick="deleteTask(\'' + cl.id + '\',\'' + task.id + '\')">×</button>' +
                '</div>';
        }
        var doneCount = 0;
        for (var d = 0; d < cl.tasks.length; d++) {
            if (cl.tasks[d].done) doneCount++;
        }
        var total = cl.tasks.length;
        var progress = total > 0 ? Math.round((doneCount / total) * 100) : 0;

        var priorityClass = cl.priority || 'medium';
        var priorityLabel = priorityLabels[priorityClass] || 'Средний';

        html +=
            '<div class="checklist-item">' +
            '<div class="header">' +
            '<div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">' +
            '<h3>' + cl.title + '</h3>' +
            '<span class="priority-badge ' + priorityClass + '">' + priorityLabel + '</span>' +
            '</div>' +
            '<span class="date">' + new Date(cl.eventDate).toLocaleDateString('ru-RU') + '</span>' +
            '</div>' +
            '<div class="progress-bar">' +
            '<div class="progress-fill" style="width: ' + progress + '%;"></div>' +
            '</div>' +
            '<div class="progress-text">Выполнено: ' + doneCount + ' из ' + total + ' (' + progress + '%)</div>' +
            '<div class="tasks">' +
            tasksHtml +
            '<div class="checklist-actions">' +
            '<button class="btn btn-secondary btn-sm" onclick="addTask(\'' + cl.id + '\')">Добавить задачу</button>' +
            '<button class="btn btn-danger btn-sm" onclick="deleteChecklist(\'' + cl.id + '\')">Удалить</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;
}

function deleteVenue(id) {
    if (!confirm('Удалить площадку?')) return;
    var newVenues = [];
    for (var i = 0; i < data.venues.length; i++) {
        if (data.venues[i].id !== id) {
            newVenues.push(data.venues[i]);
        }
    }
    data.venues = newVenues;
    saveData();
    renderVenues();
    updateStats();
}

function editVenue(id) {
    var venue = null;
    for (var i = 0; i < data.venues.length; i++) {
        if (data.venues[i].id === id) {
            venue = data.venues[i];
            break;
        }
    }
    if (!venue) return;
    openModal('venue', venue);
}

function deleteContractor(id) {
    if (!confirm('Удалить подрядчика?')) return;
    var newContractors = [];
    for (var i = 0; i < data.contractors.length; i++) {
        if (data.contractors[i].id !== id) {
            newContractors.push(data.contractors[i]);
        }
    }
    data.contractors = newContractors;
    saveData();
    renderContractors();
    updateStats();
}

function editContractor(id) {
    var contractor = null;
    for (var i = 0; i < data.contractors.length; i++) {
        if (data.contractors[i].id === id) {
            contractor = data.contractors[i];
            break;
        }
    }
    if (!contractor) return;
    openModal('contractor', contractor);
}

function deleteChecklist(id) {
    if (!confirm('Удалить чек-лист?')) return;
    var newChecklists = [];
    for (var i = 0; i < data.checklists.length; i++) {
        if (data.checklists[i].id !== id) {
            newChecklists.push(data.checklists[i]);
        }
    }
    data.checklists = newChecklists;
    saveData();
    renderChecklists();
    updateStats();
}

function toggleTask(checklistId, taskId) {
    var cl = null;
    for (var i = 0; i < data.checklists.length; i++) {
        if (data.checklists[i].id === checklistId) {
            cl = data.checklists[i];
            break;
        }
    }
    if (!cl) return;

    var task = null;
    for (var j = 0; j < cl.tasks.length; j++) {
        if (cl.tasks[j].id === taskId) {
            task = cl.tasks[j];
            break;
        }
    }
    if (!task) return;

    task.done = !task.done;
    saveData();
    renderChecklists();
}

function deleteTask(checklistId, taskId) {
    var cl = null;
    for (var i = 0; i < data.checklists.length; i++) {
        if (data.checklists[i].id === checklistId) {
            cl = data.checklists[i];
            break;
        }
    }
    if (!cl) return;

    var newTasks = [];
    for (var j = 0; j < cl.tasks.length; j++) {
        if (cl.tasks[j].id !== taskId) {
            newTasks.push(cl.tasks[j]);
        }
    }
    cl.tasks = newTasks;
    saveData();
    renderChecklists();
}

function addTask(checklistId) {
    var text = prompt('Введите название задачи:');
    if (!text || text.trim() === '') return;

    var cl = null;
    for (var i = 0; i < data.checklists.length; i++) {
        if (data.checklists[i].id === checklistId) {
            cl = data.checklists[i];
            break;
        }
    }
    if (!cl) return;

    cl.tasks.push({
        id: generateId(),
        text: text.trim(),
        done: false
    });
    saveData();
    renderChecklists();
}

function openModal(type, editData) {
    var overlay = document.getElementById('modal-overlay');
    var title = document.getElementById('modal-title');
    var body = document.getElementById('modal-body');

    var isEdit = !!editData;

    if (type === 'venue') {
        title.textContent = isEdit ? 'Редактировать площадку' : 'Новая площадка';
        body.innerHTML =
            '<form id="modal-form" onsubmit="saveVenue(event)">' +
            '<input type="hidden" id="venue-id" value="' + (editData ? editData.id : '') + '">' +
            '<div class="form-group">' +
            '<label>Название площадки *</label>' +
            '<input type="text" id="venue-name" required value="' + (editData ? editData.name : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Адрес *</label>' +
            '<input type="text" id="venue-address" required value="' + (editData ? editData.address : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Вместимость (чел.) *</label>' +
            '<input type="number" id="venue-capacity" required value="' + (editData ? editData.capacity : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Цена за час (₽) *</label>' +
            '<input type="number" id="venue-price" required value="' + (editData ? editData.pricePerHour : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Возможности (через запятую)</label>' +
            '<input type="text" id="venue-features" value="' + (editData ? editData.features.join(', ') : '') +
            '" placeholder="wifi, projector, sound, kitchen, parking, stage, accommodation">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Иконка (символ)</label>' +
            '<input type="text" id="venue-image" value="' + (editData ? editData.image : '🏛') + '" maxlength="2">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Рейтинг (0-5)</label>' +
            '<input type="number" id="venue-rating" step="0.1" min="0" max="5" value="' + (editData ? editData.rating : 0) + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Количество отзывов</label>' +
            '<input type="number" id="venue-reviews" min="0" value="' + (editData ? editData.reviews : 0) + '">' +
            '</div>' +
            '<div class="form-actions">' +
            '<button type="button" class="btn btn-secondary" onclick="closeModal()">Отмена</button>' +
            '<button type="submit" class="btn">' + (isEdit ? 'Сохранить' : 'Создать') + '</button>' +
            '</div>' +
            '</form>';
    } else if (type === 'contractor') {
        title.textContent = isEdit ? 'Редактировать подрядчика' : 'Новый подрядчик';
        body.innerHTML =
            '<form id="modal-form" onsubmit="saveContractor(event)">' +
            '<input type="hidden" id="contractor-id" value="' + (editData ? editData.id : '') + '">' +
            '<div class="form-group">' +
            '<label>Имя / Название *</label>' +
            '<input type="text" id="contractor-name" required value="' + (editData ? editData.name : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Категория *</label>' +
            '<select id="contractor-category" required>' +
            '<option value="catering"' + (editData && editData.category === 'catering' ? ' selected' : '') + '>Кейтеринг</option>' +
            '<option value="photographer"' + (editData && editData.category === 'photographer' ? ' selected' : '') +
            '>Фотограф</option>' +
            '<option value="decor"' + (editData && editData.category === 'decor' ? ' selected' : '') + '>Декор</option>' +
            '<option value="dj"' + (editData && editData.category === 'dj' ? ' selected' : '') + '>DJ</option>' +
            '<option value="entertainer"' + (editData && editData.category === 'entertainer' ? ' selected' : '') +
            '>Ведущий</option>' +
            '<option value="florist"' + (editData && editData.category === 'florist' ? ' selected' : '') + '>Флорист</option>' +
            '<option value="videographer"' + (editData && editData.category === 'videographer' ? ' selected' : '') +
            '>Видеограф</option>' +
            '<option value="transport"' + (editData && editData.category === 'transport' ? ' selected' : '') +
            '>Транспорт</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Телефон *</label>' +
            '<input type="text" id="contractor-phone" required value="' + (editData ? editData.phone : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Email *</label>' +
            '<input type="email" id="contractor-email" required value="' + (editData ? editData.email : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Рейтинг (0-5)</label>' +
            '<input type="number" id="contractor-rating" step="0.1" min="0" max="5" value="' + (editData ? editData.rating : 0) + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Количество отзывов</label>' +
            '<input type="number" id="contractor-reviews" min="0" value="' + (editData ? editData.reviews : 0) + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Цена (₽) *</label>' +
            '<input type="number" id="contractor-price" required value="' + (editData ? editData.price : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Описание</label>' +
            '<textarea id="contractor-description" rows="2">' + (editData ? editData.description : '') + '</textarea>' +
            '</div>' +
            '<div class="form-actions">' +
            '<button type="button" class="btn btn-secondary" onclick="closeModal()">Отмена</button>' +
            '<button type="submit" class="btn">' + (isEdit ? 'Сохранить' : 'Создать') + '</button>' +
            '</div>' +
            '</form>';
    } else if (type === 'checklist') {
        title.textContent = isEdit ? 'Редактировать чек-лист' : 'Новый чек-лист';
        var tasksText = '';
        if (editData) {
            for (var k = 0; k < editData.tasks.length; k++) {
                tasksText += editData.tasks[k].text + '\n';
            }
        }
        body.innerHTML =
            '<form id="modal-form" onsubmit="saveChecklist(event)">' +
            '<input type="hidden" id="checklist-id" value="' + (editData ? editData.id : '') + '">' +
            '<div class="form-group">' +
            '<label>Название чек-листа *</label>' +
            '<input type="text" id="checklist-title" required value="' + (editData ? editData.title : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Дата мероприятия *</label>' +
            '<input type="date" id="checklist-date" required value="' + (editData ? editData.eventDate : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Приоритет</label>' +
            '<select id="checklist-priority">' +
            '<option value="high"' + (editData && editData.priority === 'high' ? ' selected' : '') + '>Высокий</option>' +
            '<option value="medium"' + (editData && editData.priority === 'medium' ? ' selected' : '') + '>Средний</option>' +
            '<option value="low"' + (editData && editData.priority === 'low' ? ' selected' : '') + '>Низкий</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label>Задачи (каждая с новой строки)</label>' +
            '<textarea id="checklist-tasks" rows="4" placeholder="Заказать торт&#10;Пригласить фотографа&#10;Проверить звук">' +
            tasksText +
            '</textarea>' +
            '</div>' +
            '<div class="form-actions">' +
            '<button type="button" class="btn btn-secondary" onclick="closeModal()">Отмена</button>' +
            '<button type="submit" class="btn">' + (isEdit ? 'Сохранить' : 'Создать') + '</button>' +
            '</div>' +
            '</form>';
    }

    overlay.classList.add('active');
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modal-overlay').classList.remove('active');
}

function saveVenue(e) {
    e.preventDefault();
    var id = document.getElementById('venue-id').value;
    var name = document.getElementById('venue-name').value.trim();
    var address = document.getElementById('venue-address').value.trim();
    var capacity = parseInt(document.getElementById('venue-capacity').value);
    var pricePerHour = parseInt(document.getElementById('venue-price').value);
    var features = document.getElementById('venue-features').value.split(',').map(function(s) { return s.trim(); })
        .filter(function(s) { return s; });
    var image = document.getElementById('venue-image').value.trim() || '🏛';
    var rating = parseFloat(document.getElementById('venue-rating').value) || 0;
    var reviews = parseInt(document.getElementById('venue-reviews').value) || 0;

    var venue = {
        id: id || generateId(),
        name: name,
        address: address,
        capacity: capacity,
        pricePerHour: pricePerHour,
        features: features,
        image: image,
        rating: Math.min(5, Math.max(0, rating)),
        reviews: reviews
    };

    if (id) {
        for (var i = 0; i < data.venues.length; i++) {
            if (data.venues[i].id === id) {
                data.venues[i] = venue;
                break;
            }
        }
    } else {
        data.venues.push(venue);
    }

    saveData();
    closeModal();
    renderVenues();
    updateStats();
}

function saveContractor(e) {
    e.preventDefault();
    var id = document.getElementById('contractor-id').value;
    var name = document.getElementById('contractor-name').value.trim();
    var category = document.getElementById('contractor-category').value;
    var phone = document.getElementById('contractor-phone').value.trim();
    var email = document.getElementById('contractor-email').value.trim();
    var rating = parseFloat(document.getElementById('contractor-rating').value) || 0;
    var reviews = parseInt(document.getElementById('contractor-reviews').value) || 0;
    var price = parseInt(document.getElementById('contractor-price').value);
    var description = document.getElementById('contractor-description').value.trim();

    var contractor = {
        id: id || generateId(),
        name: name,
        category: category,
        phone: phone,
        email: email,
        rating: Math.min(5, Math.max(0, rating)),
        reviews: reviews,
        price: price,
        description: description
    };

    if (id) {
        for (var i = 0; i < data.contractors.length; i++) {
            if (data.contractors[i].id === id) {
                data.contractors[i] = contractor;
                break;
            }
        }
    } else {
        data.contractors.push(contractor);
    }

    saveData();
    closeModal();
    renderContractors();
    updateStats();
}

function saveChecklist(e) {
    e.preventDefault();
    var id = document.getElementById('checklist-id').value;
    var title = document.getElementById('checklist-title').value.trim();
    var eventDate = document.getElementById('checklist-date').value;
    var priority = document.getElementById('checklist-priority').value;
    var tasksText = document.getElementById('checklist-tasks').value;
    var tasks = tasksText.split('\n')
        .map(function(s) { return s.trim(); })
        .filter(function(s) { return s; })
        .map(function(text) {
            return { id: generateId(), text: text, done: false };
        });

    var checklist = {
        id: id || generateId(),
        title: title,
        eventDate: eventDate,
        priority: priority,
        tasks: tasks
    };

    if (id) {
        for (var i = 0; i < data.checklists.length; i++) {
            if (data.checklists[i].id === id) {
                var existing = data.checklists[i];
                var taskMap = {};
                for (var j = 0; j < existing.tasks.length; j++) {
                    taskMap[existing.tasks[j].text] = existing.tasks[j];
                }
                for (var k = 0; k < checklist.tasks.length; k++) {
                    if (taskMap[checklist.tasks[k].text]) {
                        checklist.tasks[k].done = taskMap[checklist.tasks[k].text].done;
                    }
                }
                data.checklists[i] = checklist;
                break;
            }
        }
    } else {
        data.checklists.push(checklist);
    }

    saveData();
    closeModal();
    renderChecklists();
    updateStats();
}

function renderDashboard() {
    renderTopVenues();
    renderRecentChecklists();
    renderTopContractors();
}

function renderTopVenues() {
    var container = document.getElementById('top-venues-list');
    if (data.venues.length === 0) {
        container.innerHTML = '<div class="mini-list-empty">Нет добавленных площадок</div>';
        return;
    }

    var sorted = data.venues.slice().sort(function(a, b) {
        return (b.rating || 0) - (a.rating || 0);
    });
    var top = sorted.slice(0, 3);

    var html = '';
    for (var i = 0; i < top.length; i++) {
        var v = top[i];
        var ratingHtml = getStarsHtml(v.rating || 0, '12px');
        html +=
            '<div class="mini-list-item" onclick="navigateTo(\'venues\')">' +
            '<div class="item-left">' +
            '<span class="item-icon">' + (v.image || '🏛') + '</span>' +
            '<span class="item-name venue-name">' + v.name + '</span>' +
            '</div>' +
            '<div class="item-right">' +
            '<span class="item-rating">' + ratingHtml + ' ' + (v.rating || 0).toFixed(1) + '</span>' +
            '<span class="item-meta">' + v.pricePerHour.toLocaleString() + ' ₽</span>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;
}

function renderRecentChecklists() {
    var container = document.getElementById('recent-checklists');
    if (data.checklists.length === 0) {
        container.innerHTML = '<div class="mini-list-empty">Нет созданных чек-листов</div>';
        return;
    }

    var sorted = data.checklists.slice().sort(function(a, b) {
        return new Date(b.eventDate) - new Date(a.eventDate);
    });
    var recent = sorted.slice(0, 3);

    var html = '';
    for (var i = 0; i < recent.length; i++) {
        var cl = recent[i];
        var doneCount = 0;
        for (var d = 0; d < cl.tasks.length; d++) {
            if (cl.tasks[d].done) doneCount++;
        }
        var total = cl.tasks.length;
        var progress = total > 0 ? Math.round((doneCount / total) * 100) : 0;

        var badgeClass = 'low';
        if (progress >= 80) badgeClass = 'high';
        else if (progress >= 40) badgeClass = 'medium';

        var priorityLabel = {
            high: '🔴',
            medium: '🟡',
            low: '🟢'
        }[cl.priority] || '';

        html +=
            '<div class="mini-list-item" onclick="navigateTo(\'checklists\')">' +
            '<div class="item-left">' +
            '<span class="item-icon">' + priorityLabel + '</span>' +
            '<span class="item-name">' + cl.title + '</span>' +
            '</div>' +
            '<div class="item-right">' +
            '<span class="item-progress">' + progress + '%</span>' +
            '<span class="item-badge ' + badgeClass + '">' + doneCount + '/' + total + '</span>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;
}

function renderTopContractors() {
    var container = document.getElementById('top-contractors');
    if (data.contractors.length === 0) {
        container.innerHTML = '<div class="mini-list-empty">Нет добавленных подрядчиков</div>';
        return;
    }

    var icons = {
        catering: '🍽',
        photographer: '📷',
        decor: '🎨',
        dj: '🎵',
        entertainer: '🎤',
        florist: '🌸',
        videographer: '🎥',
        transport: '🚗'
    };

    var sorted = data.contractors.slice().sort(function(a, b) {
        return (b.rating || 0) - (a.rating || 0);
    });
    var top = sorted.slice(0, 3);

    var html = '';
    for (var i = 0; i < top.length; i++) {
        var c = top[i];
        var ratingHtml = getStarsHtml(c.rating || 0, '12px');
        html +=
            '<div class="mini-list-item" onclick="navigateTo(\'contractors\')">' +
            '<div class="item-left">' +
            '<span class="item-icon">' + (icons[c.category] || '👤') + '</span>' +
            '<span class="item-name">' + c.name + '</span>' +
            '</div>' +
            '<div class="item-right">' +
            '<span class="item-rating">' + ratingHtml + ' ' + (c.rating || 0).toFixed(1) + '</span>' +
            '<span class="item-meta">' + c.price.toLocaleString() + ' ₽</span>' +
            '</div>' +
            '</div>';
    }
    container.innerHTML = html;
}

function openPolicy() {
    document.getElementById('policy-modal').classList.add('active');
}

function closePolicy(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('policy-modal').classList.remove('active');
}

function openTerms() {
    document.getElementById('terms-modal').classList.add('active');
}

function closeTerms(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('terms-modal').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closePolicy();
        closeTerms();
    }
});

updateStats();
renderVenues();
renderContractors();
renderChecklists();