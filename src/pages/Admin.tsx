import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for admin dashboard
  const systemStats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalRequests: 5643,
    pendingRequests: 43,
    systemUptime: '99.8%',
    storageUsed: '2.4TB'
  };

  const recentUsers = [
    { id: '1', name: 'Анна Петрова', email: 'anna@company.com', role: 'admin', status: 'active', lastLogin: '2 мин назад' },
    { id: '2', name: 'Михаил Сидоров', email: 'mikhail@org.ru', role: 'user', status: 'active', lastLogin: '15 мин назад' },
    { id: '3', name: 'Елена Кузнецова', email: 'elena@business.com', role: 'manager', status: 'blocked', lastLogin: '2 часа назад' },
    { id: '4', name: 'Дмитрий Волков', email: 'dmitry@startup.io', role: 'user', status: 'active', lastLogin: '1 день назад' }
  ];

  const systemLogs = [
    { id: '1', timestamp: '2024-03-15 14:32:11', level: 'info', module: 'Auth', message: 'Пользователь anna@company.com успешно авторизован' },
    { id: '2', timestamp: '2024-03-15 14:28:05', level: 'warning', module: 'System', message: 'Превышено 80% использования диского пространства' },
    { id: '3', timestamp: '2024-03-15 14:15:22', level: 'error', module: 'API', message: 'Ошибка подключения к внешнему сервису' },
    { id: '4', timestamp: '2024-03-15 13:45:18', level: 'info', module: 'Requests', message: 'Заявка #5643 одобрена пользователем mikhail@org.ru' }
  ];

  const pendingRequests = [
    { id: '5643', user: 'Анна Петрова', organization: 'ООО "Техно"', amount: '₽45,000', category: 'Командировка', date: '15.03.2024', priority: 'high' },
    { id: '5642', user: 'Михаил Сидоров', organization: 'АО "Прогресс"', amount: '₽12,500', category: 'Канцелярия', date: '15.03.2024', priority: 'medium' },
    { id: '5641', user: 'Елена Кузнецова', organization: 'ИП Кузнецов', amount: '₽8,300', category: 'Транспорт', date: '14.03.2024', priority: 'low' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'blocked': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-slate-900">Администрирование</h1>
            <Badge variant="outline" className="text-red-600 border-red-200">
              Системный доступ
            </Badge>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Icon name="Download" className="w-4 h-4 mr-2" />
              Экспорт данных
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Всего пользователей</CardTitle>
              <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalUsers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Активных</CardTitle>
              <Icon name="UserCheck" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.activeUsers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Всего заявок</CardTitle>
              <Icon name="FileText" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalRequests}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">На рассмотрении</CardTitle>
              <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{systemStats.pendingRequests}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Время работы</CardTitle>
              <Icon name="Activity" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{systemStats.systemUptime}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Хранилище</CardTitle>
              <Icon name="HardDrive" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.storageUsed}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="requests">Заявки</TabsTrigger>
            <TabsTrigger value="content">Контент</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
            <TabsTrigger value="logs">Логи</TabsTrigger>
          </TabsList>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Users" className="w-5 h-5" />
                  <span>Управление пользователями</span>
                </CardTitle>
                <CardDescription>
                  Просмотр и управление всеми пользователями системы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Поиск по имени или email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                  <Button>
                    <Icon name="Plus" className="w-4 h-4 mr-2" />
                    Добавить пользователя
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Пользователь</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Роль</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Последний вход</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.role}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status === 'active' ? 'Активен' : user.status === 'blocked' ? 'Заблокирован' : 'Ожидает'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Icon name="Edit" className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Icon name="Ban" className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Requests Management */}
          <TabsContent value="requests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="FileText" className="w-5 h-5" />
                  <span>Управление заявками</span>
                </CardTitle>
                <CardDescription>
                  Модерация и управление всеми заявками в системе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Пользователь</TableHead>
                      <TableHead>Организация</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Категория</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Приоритет</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-mono">#{request.id}</TableCell>
                        <TableCell className="font-medium">{request.user}</TableCell>
                        <TableCell>{request.organization}</TableCell>
                        <TableCell className="font-semibold">{request.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{request.category}</Badge>
                        </TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority === 'high' ? 'Высокий' : request.priority === 'medium' ? 'Средний' : 'Низкий'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="text-green-600">
                              <Icon name="Check" className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Icon name="X" className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Icon name="Eye" className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Image" className="w-5 h-5" />
                    <span>Медиа файлы</span>
                  </CardTitle>
                  <CardDescription>
                    Управление изображениями и документами
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                    <Icon name="Upload" className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Перетащите файлы или нажмите для загрузки
                    </p>
                    <Button variant="outline" size="sm">
                      Выбрать файлы
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Статистика:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Всего файлов: 1,247</div>
                      <div>Размер: 2.4 TB</div>
                      <div>Использовано: 78%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MessageSquare" className="w-5 h-5" />
                    <span>Уведомления</span>
                  </CardTitle>
                  <CardDescription>
                    Массовая рассылка уведомлений
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notification-title">Заголовок</Label>
                    <Input id="notification-title" placeholder="Важное объявление" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notification-text">Текст сообщения</Label>
                    <Textarea id="notification-text" placeholder="Введите текст уведомления..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notification-target">Получатели</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите группу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все пользователи</SelectItem>
                        <SelectItem value="active">Активные пользователи</SelectItem>
                        <SelectItem value="admins">Администраторы</SelectItem>
                        <SelectItem value="managers">Менеджеры</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить уведомление
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="settings" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Settings" className="w-5 h-5" />
                    <span>Основные настройки</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="site-name">Название сайта</Label>
                    <Input id="site-name" defaultValue="Подотчетные средства" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email администратора</Label>
                    <Input id="admin-email" defaultValue="admin@company.com" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Режим обслуживания</Label>
                      <p className="text-sm text-muted-foreground">
                        Временно отключить доступ к сайту
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Регистрация новых пользователей</Label>
                      <p className="text-sm text-muted-foreground">
                        Разрешить создание новых аккаунтов
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Shield" className="w-5 h-5" />
                    <span>Безопасность</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Двухфакторная аутентификация</Label>
                      <p className="text-sm text-muted-foreground">
                        Обязательная 2FA для администраторов
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Логирование действий</Label>
                      <p className="text-sm text-muted-foreground">
                        Запись всех действий пользователей
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Время сеанса (минуты)</Label>
                    <Input id="session-timeout" type="number" defaultValue="60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-file-size">Максимальный размер файла (MB)</Label>
                    <Input id="max-file-size" type="number" defaultValue="10" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Logs */}
          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="ScrollText" className="w-5 h-5" />
                  <span>Системные логи</span>
                </CardTitle>
                <CardDescription>
                  Просмотр и анализ системных событий
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все уровни</SelectItem>
                      <SelectItem value="error">Ошибки</SelectItem>
                      <SelectItem value="warning">Предупреждения</SelectItem>
                      <SelectItem value="info">Информация</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all-modules">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-modules">Все модули</SelectItem>
                      <SelectItem value="auth">Авторизация</SelectItem>
                      <SelectItem value="system">Система</SelectItem>
                      <SelectItem value="api">API</SelectItem>
                      <SelectItem value="requests">Заявки</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Icon name="Download" className="w-4 h-4 mr-2" />
                    Экспорт логов
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Время</TableHead>
                      <TableHead>Уровень</TableHead>
                      <TableHead>Модуль</TableHead>
                      <TableHead>Сообщение</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {systemLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                        <TableCell>
                          <Badge className={getLogLevelColor(log.level)}>
                            {log.level}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{log.module}</Badge>
                        </TableCell>
                        <TableCell>{log.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;