import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.4), rgba(47, 79, 47, 0.4)), url('/img/ae1981dc-4863-4481-971c-75419315813b.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            ТАЙГА
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Традиционный русский банный комплекс
          </p>
          <p className="text-lg mb-12 opacity-90 max-w-xl mx-auto">
            Окунитесь в мир настоящей русской бани, где древние традиции встречаются с современным комфортом
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
            Забронировать сеанс
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Погрузитесь в атмосферу традиционной русской бани с полным спектром оздоровительных процедур
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Flame" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Русская баня</CardTitle>
                <CardDescription>
                  Классическая парная с березовыми вениками и травяными настоями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Температура 80-100°C
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Березовые веники
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Травяные настои
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Droplets" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Купель</CardTitle>
                <CardDescription>
                  Контрастные процедуры в ледяной купели после парной
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Температура 4-8°C
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Закаливание
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Оздоровление
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon name="Leaf" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Массаж вениками</CardTitle>
                <CardDescription>
                  Традиционный массаж березовыми и дубовыми вениками
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Березовые веники
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Дубовые веники
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Эвкалиптовые веники
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Coffee" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Чайная церемония</CardTitle>
                <CardDescription>
                  Травяные чаи с медом и вареньем в уютной комнате отдыха
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Травяные сборы
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Натуральный мед
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Домашнее варенье
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Банщик</CardTitle>
                <CardDescription>
                  Профессиональный банщик проведет полный цикл процедур
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Опытный мастер
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Консультации
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon name="Home" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Комната отдыха</CardTitle>
                <CardDescription>
                  Уютная зона отдыха с русской печью и народными традициями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Русская печь
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Народные инструменты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Уютная атмосфера
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Польза русской бани
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Тысячелетние традиции оздоровления организма и души
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="Heart" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Укрепление сердца</h3>
              <p className="text-muted-foreground">Улучшение кровообращения и работы сердечно-сосудистой системы</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Icon name="Shield" size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Иммунитет</h3>
              <p className="text-muted-foreground">Повышение защитных сил организма и профилактика заболеваний</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="Sparkles" size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Очищение</h3>
              <p className="text-muted-foreground">Глубокое очищение кожи и выведение токсинов из организма</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="Smile" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Релаксация</h3>
              <p className="text-muted-foreground">Снятие стресса, расслабление мышц и восстановление энергии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Атмосфера "Тайги"
            </h2>
            <p className="text-xl text-muted-foreground">
              Окунитесь в мир традиций и комфорта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/img/ae6de41a-57d7-40f0-9fcc-ed609011b9e8.jpg" 
                alt="Интерьер русской бани" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Парная</h3>
                  <p className="text-sm opacity-90">Традиционная русская баня</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/img/4a43770f-78d6-4fa1-b4ed-d020bee56265.jpg" 
                alt="Банные принадлежности" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Традиции</h3>
                  <p className="text-sm opacity-90">Веники, мед, травяные настои</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/img/ae1981dc-4863-4481-971c-75419315813b.jpg" 
                alt="Банный комплекс зимой" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Экстерьер</h3>
                  <p className="text-sm opacity-90">Традиционная архитектура</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий пакет услуг
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Классик</CardTitle>
                <div className="text-4xl font-bold text-primary mb-4">2 500 ₽</div>
                <CardDescription>За 2 часа / группа до 6 человек</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Русская парная</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Березовые веники</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Комната отдыха</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Травяной чай</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-xl transition-all duration-300 ring-2 ring-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Премиум</CardTitle>
                <div className="text-4xl font-bold text-primary mb-4">4 500 ₽</div>
                <CardDescription>За 3 часа / группа до 8 человек</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Все из пакета "Классик"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Купель с холодной водой</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Массаж вениками</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Мед и варенье</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Халаты и тапочки</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">VIP</CardTitle>
                <div className="text-4xl font-bold text-primary mb-4">7 500 ₽</div>
                <CardDescription>За 4 часа / группа до 10 человек</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Все из пакета "Премиум"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Персональный банщик</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Эксклюзивные настои</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Банкетное обслуживание</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>Бассейн с подогревом</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Запишитесь на сеанс
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Почувствуйте силу традиций русской бани
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={24} />
              <span className="text-lg">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Clock" size={24} />
              <span className="text-lg">Ежедневно 10:00-22:00</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} />
              <span className="text-lg">Московская область</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold"
            >
              Забронировать время
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ТАЙГА</h3>
              <p className="opacity-80">
                Традиционный русский банный комплекс с многолетней историей
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 opacity-80">
                <li>Русская баня</li>
                <li>Массаж вениками</li>
                <li>Купель</li>
                <li>Чайная церемония</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@taiga-banya.ru</li>
                <li>Московская область</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 opacity-80">
                <li>Понедельник - Воскресенье</li>
                <li>10:00 - 22:00</li>
                <li>Без выходных</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center opacity-60">
            <p>© 2024 Банный комплекс "Тайга". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}