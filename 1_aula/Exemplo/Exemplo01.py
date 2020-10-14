class Foo(object):
    def _get_bar(self):
        return self.__bar
    def _set_bar(self, value):
        if not isinstance(value, int):
            raise TypeError("bar precisa ser um valor inteiro")
        self.__bar = value
    bar = property(_get_bar, _set_bar)