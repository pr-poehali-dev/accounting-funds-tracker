import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userProfile = {
    name: 'Алексей Петров',
    email: 'a.petrov@company.ru',
    phone: '+7 (999) 123-45-67',
    position: 'Финансовый директор',
    department: 'Финансы',
    joinDate: '15 марта 2023',
    avatar: '/api/placeholder/150/150',
    bio: 'Опытный финансовый директор с 12-летним опытом в области корпоративных финансов и бюджетирования.',
    status: 'online'
  };

  const activities = [
    { type: 'request', action: 'Создал заявку на офисные принадлежности', amount: '15 000 ₽', time: '2 часа назад' },
    { type: 'approval', action: 'Утвердил заявку от Ивановой И.И.', amount: '45 000 ₽', time: '4 часа назад' },
    { type: 'budget', action: 'Обновил бюджет департамента ИТ', amount: '150 000 ₽', time: '1 день назад' },
    { type: 'report', action: 'Экспортировал отчет по расходам', time: '2 дня назад' },
    { type: 'settings', action: 'Изменил настройки уведомлений', time: '3 дня назад' },
  ];

  const notifications = [
    { id: 1, type: 'email', title: 'Email уведомления', description: 'Получать уведомления на email', enabled: true },
    { id: 2, type: 'push', title: 'Push уведомления', description: 'Показывать уведомления в браузере', enabled: true },
    { id: 3, type: 'sms', title: 'SMS уведомления', description: 'Уведомления по SMS для важных событий', enabled: false },
    { id: 4, type: 'requests', title: 'Новые заявки', description: 'Уведомления о новых заявках на утверждение', enabled: true },
    { id: 5, type: 'budget', title: 'Превышение бюджета', description: 'Предупреждения о превышении лимитов', enabled: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Личный кабинет</h1>
            <p className="text-muted-foreground mt-2">Управление профилем и настройками аккаунта</p>
          </div>
          <Badge className="bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Онлайн
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="text-xl font-semibold bg-primary text-primary-foreground">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{userProfile.name}</h3>
                  <p className="text-sm text-muted-foreground">{userProfile.position}</p>
                  <p className="text-sm text-muted-foreground">{userProfile.department}</p>
                </div>

                <div className="w-full space-y-2 text-sm">
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="Mail" className="w-4 h-4 mr-2" />
                    {userProfile.email}
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="Phone" className="w-4 h-4 mr-2" />
                    {userProfile.phone}
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    В команде с {userProfile.joinDate}
                  </div>
                </div>

                <Button className="w-full">
                  <Icon name="Camera" className="w-4 h-4 mr-2" />
                  Изменить фото
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="profile">Профиль</TabsTrigger>
                <TabsTrigger value="security">Безопасность</TabsTrigger>
                <TabsTrigger value="notifications">Уведомления</TabsTrigger>
                <TabsTrigger value="activity">Активность</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="User" className="w-5 h-5 mr-2" />
                      Основная информация
                    </CardTitle>
                    <CardDescription>
                      Обновите свои личные данные и контактную информацию
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя</Label>
                        <Input id="firstName" defaultValue="Алексей" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input id="lastName" defaultValue="Петров" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userProfile.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" defaultValue={userProfile.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Должность</Label>
                        <Input id="position" defaultValue={userProfile.position} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Департамент</Label>
                        <Input id="department" defaultValue={userProfile.department} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">О себе</Label>
                      <Textarea id="bio" defaultValue={userProfile.bio} rows={3} />
                    </div>
                    <Button>
                      <Icon name="Save" className="w-4 h-4 mr-2" />
                      Сохранить изменения
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Shield" className="w-5 h-5 mr-2" />
                      Пароль и безопасность
                    </CardTitle>
                    <CardDescription>
                      Управление паролем и настройками безопасности
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Текущий пароль</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Новый пароль</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>
                        <Icon name="Key" className="w-4 h-4 mr-2" />
                        Изменить пароль
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium flex items-center">
                        <Icon name="Smartphone" className="w-4 h-4 mr-2" />
                        Двухфакторная аутентификация
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Добавьте дополнительный уровень безопасности к своему аккаунту
                      </p>
                      <div className="flex items-center space-x-2">
                        <Switch id="2fa" />
                        <Label htmlFor="2fa">Включить 2FA</Label>
                      </div>
                      <Button variant="outline">
                        <Icon name="QrCode" className="w-4 h-4 mr-2" />
                        Настроить аутентификатор
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium flex items-center">
                        <Icon name="Monitor" className="w-4 h-4 mr-2" />
                        Активные сессии
                      </h4>
                      <div className="space-y-3">
                        {[
                          { device: 'MacBook Pro', browser: 'Chrome', location: 'Москва, Россия', current: true, time: 'Сейчас' },
                          { device: 'iPhone 14', browser: 'Safari', location: 'Москва, Россия', current: false, time: '2 часа назад' },
                          { device: 'Windows PC', browser: 'Edge', location: 'Санкт-Петербург, Россия', current: false, time: '1 день назад' },
                        ].map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                <Icon name={session.device.includes('iPhone') ? 'Smartphone' : 'Monitor'} className="w-5 h-5 text-slate-600" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">{session.device} • {session.browser}</p>
                                <p className="text-xs text-muted-foreground">{session.location} • {session.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {session.current && <Badge className="bg-green-100 text-green-800">Текущая</Badge>}
                              {!session.current && (
                                <Button variant="outline" size="sm">
                                  Завершить
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Bell" className="w-5 h-5 mr-2" />
                      Настройки уведомлений
                    </CardTitle>
                    <CardDescription>
                      Выберите, о каких событиях вы хотите получать уведомления
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-2">
                              <Icon 
                                name={
                                  notification.type === 'email' ? 'Mail' :
                                  notification.type === 'push' ? 'Bell' :
                                  notification.type === 'sms' ? 'MessageSquare' :
                                  notification.type === 'requests' ? 'FileText' : 'AlertTriangle'
                                } 
                                className="w-4 h-4 text-muted-foreground" 
                              />
                              <Label htmlFor={notification.type} className="text-sm font-medium">
                                {notification.title}
                              </Label>
                            </div>
                            <p className="text-xs text-muted-foreground pl-6">
                              {notification.description}
                            </p>
                          </div>
                          <Switch 
                            id={notification.type} 
                            defaultChecked={notification.enabled}
                          />
                        </div>
                      ))}
                    </div>
                    <Separator className="my-6" />
                    <Button>
                      <Icon name="Save" className="w-4 h-4 mr-2" />
                      Сохранить настройки
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Icon name="Activity" className="w-5 h-5 mr-2" />
                        Последняя активность
                      </span>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" className="w-4 h-4 mr-2" />
                        Экспорт
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      История ваших действий в системе
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            activity.type === 'request' ? 'bg-blue-100' :
                            activity.type === 'approval' ? 'bg-green-100' :
                            activity.type === 'budget' ? 'bg-purple-100' :
                            activity.type === 'report' ? 'bg-orange-100' : 'bg-gray-100'
                          }`}>
                            <Icon 
                              name={
                                activity.type === 'request' ? 'FileText' :
                                activity.type === 'approval' ? 'Check' :
                                activity.type === 'budget' ? 'PieChart' :
                                activity.type === 'report' ? 'Download' : 'Settings'
                              } 
                              className={`w-5 h-5 ${
                                activity.type === 'request' ? 'text-blue-600' :
                                activity.type === 'approval' ? 'text-green-600' :
                                activity.type === 'budget' ? 'text-purple-600' :
                                activity.type === 'report' ? 'text-orange-600' : 'text-gray-600'
                              }`} 
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                            {activity.amount && (
                              <p className="text-sm text-muted-foreground">{activity.amount}</p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="FileText" className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Заявки</p>
                          <p className="text-2xl font-bold">24</p>
                          <p className="text-xs text-muted-foreground">За этот месяц</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium">Утверждения</p>
                          <p className="text-2xl font-bold">67</p>
                          <p className="text-xs text-muted-foreground">За этот месяц</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm font-medium">Среднее время</p>
                          <p className="text-2xl font-bold">2.4ч</p>
                          <p className="text-xs text-muted-foreground">Обработки заявок</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;