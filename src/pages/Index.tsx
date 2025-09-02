import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedOrg, setSelectedOrg] = useState('tech-corp');

  // Organizations data
  const organizations = [
    { id: 'tech-corp', name: 'ТехКорп ООО', type: 'ООО' },
    { id: 'digital-agency', name: 'Диджитал Агентство', type: 'ИП' },
    { id: 'consulting-llc', name: 'Консалтинг Плюс ООО', type: 'ООО' },
    { id: 'startup-inc', name: 'СтартАп Инк', type: 'АО' },
  ];

  // Mock data per organization
  const orgData = {
    'tech-corp': {
      dashboardStats: {
        totalBudget: 2500000,
        usedBudget: 1850000,
        pendingRequests: 8,
        approvedToday: 5,
      },
      recentRequests: [
        { id: 1, employee: 'Анна Петрова', amount: 25000, purpose: 'Командировка в Москву', status: 'pending', date: '2025-09-01', approver: 'Иванов И.И.' },
        { id: 2, employee: 'Михаил Сидоров', amount: 15000, purpose: 'Офисные принадлежности', status: 'approved', date: '2025-09-02', approver: 'Петрова А.В.' },
        { id: 3, employee: 'Елена Кузнецова', amount: 50000, purpose: 'Оборудование для офиса', status: 'review', date: '2025-09-03', approver: 'Смирнов В.А.' },
        { id: 4, employee: 'Дмитрий Волков', amount: 8000, purpose: 'Обеды для команды', status: 'approved', date: '2025-09-02', approver: 'Иванов И.И.' },
        { id: 5, employee: 'Ольга Морозова', amount: 35000, purpose: 'Обучение сотрудников', status: 'rejected', date: '2025-09-01', approver: 'Петрова А.В.' },
      ],
    },
    'digital-agency': {
      dashboardStats: {
        totalBudget: 800000,
        usedBudget: 520000,
        pendingRequests: 3,
        approvedToday: 2,
      },
      recentRequests: [
        { id: 1, employee: 'Владимир Козлов', amount: 18000, purpose: 'Реклама в соцсетях', status: 'approved', date: '2025-09-03', approver: 'Смирнов А.И.' },
        { id: 2, employee: 'Мария Новикова', amount: 12000, purpose: 'Дизайн материалы', status: 'pending', date: '2025-09-02', approver: 'Козлов В.П.' },
        { id: 3, employee: 'Артем Белов', amount: 25000, purpose: 'Видеосъемка', status: 'review', date: '2025-09-01', approver: 'Новикова М.С.' },
      ],
    },
    'consulting-llc': {
      dashboardStats: {
        totalBudget: 1200000,
        usedBudget: 780000,
        pendingRequests: 5,
        approvedToday: 3,
      },
      recentRequests: [
        { id: 1, employee: 'Сергей Орлов', amount: 35000, purpose: 'Конференция в СПБ', status: 'pending', date: '2025-09-03', approver: 'Петров С.В.' },
        { id: 2, employee: 'Наталья Федорова', amount: 20000, purpose: 'Бизнес-литература', status: 'approved', date: '2025-09-02', approver: 'Орлов С.М.' },
        { id: 3, employee: 'Игорь Васильев', amount: 45000, purpose: 'Аудит системы', status: 'review', date: '2025-09-01', approver: 'Федорова Н.А.' },
      ],
    },
    'startup-inc': {
      dashboardStats: {
        totalBudget: 5000000,
        usedBudget: 3200000,
        pendingRequests: 12,
        approvedToday: 8,
      },
      recentRequests: [
        { id: 1, employee: 'Алексей Морозов', amount: 80000, purpose: 'Разработка MVP', status: 'approved', date: '2025-09-03', approver: 'Иванов К.Л.' },
        { id: 2, employee: 'Юлия Крылова', amount: 45000, purpose: 'Маркетинг исследования', status: 'pending', date: '2025-09-02', approver: 'Морозов А.В.' },
        { id: 3, employee: 'Павел Соколов', amount: 60000, purpose: 'Серверы и хостинг', status: 'review', date: '2025-09-01', approver: 'Крылова Ю.Н.' },
      ],
    },
  };

  const currentOrgData = orgData[selectedOrg as keyof typeof orgData];
  const dashboardStats = currentOrgData.dashboardStats;
  const recentRequests = currentOrgData.recentRequests;



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Ожидает';
      case 'approved': return 'Одобрено';
      case 'rejected': return 'Отклонено';
      case 'review': return 'На проверке';
      default: return 'Неизвестно';
    }
  };

  const budgetUsagePercent = (dashboardStats.usedBudget / dashboardStats.totalBudget) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-900">Подотчетные средства</h1>
            </div>
            
            {/* Organization Selector */}
            <div className="flex items-center space-x-3">
              <Icon name="Building2" className="w-5 h-5 text-muted-foreground" />
              <Select value={selectedOrg} onValueChange={setSelectedOrg}>
                <SelectTrigger className="w-64">
                  <SelectValue>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">
                        {organizations.find(org => org.id === selectedOrg)?.name}
                      </span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {organizations.find(org => org.id === selectedOrg)?.type}
                      </Badge>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {organizations.map((org) => (
                    <SelectItem key={org.id} value={org.id}>
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">{org.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {org.type}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Icon name="Download" className="w-4 h-4 mr-2" />
              Экспорт
            </Button>
            <Button size="sm">
              <Icon name="Plus" className="w-4 h-4 mr-2" />
              Новая заявка
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
            <TabsTrigger value="dashboard">Главная</TabsTrigger>
            <TabsTrigger value="requests">Заявки</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Общий бюджет</CardTitle>
                  <Icon name="Wallet" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">
                    {dashboardStats.totalBudget.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="mt-2">
                    <Progress value={budgetUsagePercent} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Использовано {budgetUsagePercent.toFixed(1)}%
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Потрачено</CardTitle>
                  <Icon name="TrendingUp" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">
                    {dashboardStats.usedBudget.toLocaleString('ru-RU')} ₽
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    +12% от прошлого месяца
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Ожидают</CardTitle>
                  <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">
                    {dashboardStats.pendingRequests}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    заявок на рассмотрении
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Сегодня одобрено</CardTitle>
                  <Icon name="CheckCircle" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {dashboardStats.approvedToday}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    заявок обработано
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" className="w-5 h-5 mr-2" />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-colors">
                    <Icon name="FileText" className="w-8 h-8" />
                    <span className="text-sm font-medium">Создать заявку</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Upload" className="w-8 h-8" />
                    <span className="text-sm font-medium">Загрузить чек</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-colors">
                    <Icon name="BarChart3" className="w-8 h-8" />
                    <span className="text-sm font-medium">Отчёт расходов</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Settings" className="w-8 h-8" />
                    <span className="text-sm font-medium">Настройки</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Requests Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon name="List" className="w-5 h-5 mr-2" />
                    Последние заявки
                  </span>
                  <Button variant="ghost" size="sm">
                    Показать все
                    <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRequests.slice(0, 3).map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{request.employee}</p>
                          <p className="text-sm text-muted-foreground">{request.purpose}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-semibold text-slate-900">{request.amount.toLocaleString('ru-RU')} ₽</p>
                        <Badge className={getStatusColor(request.status)}>
                          {getStatusText(request.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FileText" className="w-5 h-5 mr-2" />
                  Все заявки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRequests.map((request) => (
                    <div key={request.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name="User" className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{request.employee}</h3>
                            <p className="text-sm text-muted-foreground">ID: #{request.id}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {getStatusText(request.status)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Сумма</p>
                          <p className="font-semibold text-lg text-slate-900">{request.amount.toLocaleString('ru-RU')} ₽</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Назначение</p>
                          <p className="font-medium text-slate-900">{request.purpose}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Согласующий</p>
                          <p className="font-medium text-slate-900">{request.approver}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Дата подачи: {request.date}</p>
                        <div className="flex space-x-2">
                          {request.status === 'pending' && (
                            <>
                              <Button size="sm" variant="outline">
                                <Icon name="Eye" className="w-4 h-4 mr-1" />
                                Просмотр
                              </Button>
                              <Button size="sm">
                                <Icon name="Check" className="w-4 h-4 mr-1" />
                                Одобрить
                              </Button>
                            </>
                          )}
                          {request.status === 'approved' && (
                            <Button size="sm" variant="outline">
                              <Icon name="Download" className="w-4 h-4 mr-1" />
                              Скачать
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Expense Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="PieChart" className="w-5 h-5 mr-2" />
                    Расходы по категориям
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: 'Командировки', amount: 750000, color: 'bg-blue-500' },
                      { category: 'Офисные расходы', amount: 450000, color: 'bg-green-500' },
                      { category: 'Обучение', amount: 320000, color: 'bg-yellow-500' },
                      { category: 'Оборудование', amount: 280000, color: 'bg-purple-500' },
                      { category: 'Прочее', amount: 50000, color: 'bg-gray-500' },
                    ].map((item, index) => {
                      const percentage = (item.amount / dashboardStats.usedBudget) * 100;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">{item.category}</span>
                              <span className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</span>
                            </div>
                            <Progress value={percentage} className="h-2" />
                          </div>
                          <span className="text-sm font-semibold min-w-0">
                            {item.amount.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Trends */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" className="w-5 h-5 mr-2" />
                    Динамика по месяцам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { month: 'Янв 2025', amount: 520000, trend: 'up' },
                      { month: 'Фев 2025', amount: 480000, trend: 'down' },
                      { month: 'Мар 2025', amount: 650000, trend: 'up' },
                      { month: 'Апр 2025', amount: 590000, trend: 'down' },
                      { month: 'Май 2025', amount: 720000, trend: 'up' },
                      { month: 'Июн 2025', amount: 680000, trend: 'down' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon 
                            name={item.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                            className={`w-5 h-5 ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} 
                          />
                          <span className="font-medium">{item.month}</span>
                        </div>
                        <span className="font-semibold">{item.amount.toLocaleString('ru-RU')} ₽</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Сводная статистика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">{recentRequests.length}</p>
                    <p className="text-sm text-muted-foreground">Всего заявок</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">
                      {recentRequests.filter(r => r.status === 'approved').length}
                    </p>
                    <p className="text-sm text-muted-foreground">Одобренных</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">
                      {Math.round(recentRequests.reduce((sum, r) => sum + r.amount, 0) / recentRequests.length).toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-sm text-muted-foreground">Средняя сумма</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;