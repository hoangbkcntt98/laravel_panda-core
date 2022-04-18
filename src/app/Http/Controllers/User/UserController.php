<?php

namespace App\Http\Controllers\User;

use App\Data\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Utils\PandaPagination;
use App\Utils\ViewBuilder;
use Exception;

class UserController extends Controller
{
    use PandaPagination;

    protected $model = User::class;

    protected $limit_options = [10, 50, 100, 500];

    public function index(Request $req)
    {
        $query = $this->model::instance();
        $columns = [
            'id' => true,
            'name' => [
                'show' => true
            ],
            'email' => [
                'show' => true
            ],
            'role' => [
                'show' => true
            ]
        ];
        $options = [
            [
                'icon' => 'info',
                'text' => 'Hello'
            ]
        ];
        $view_builder = new ViewBuilder();
        $data = $this->applyPaginationByQuery($query, $req);
        $view_builder
            ->setLimitOptions($this->limit_options)
            ->setColumns($columns)
            ->setQuery($query)
            ->setModel($this->model)
            ->setData($data)
            ->setOptions($options);
        return $view_builder();
    }

    public function delete(Request $req)
    {
        if ($req->get('delete_all')) {
            try {
                $this->model::where('deleted_at',null)->delete();
            } catch (Exception $e) {
                return response()->json([
                    'status' => 401,
                    'message' => $e->getMessage()
                ]);
            }
        } else {
            try {
                $this->model::destroy($req->get('ids') ?? []);
            } catch (Exception $e) {
                return response()->json([
                    'status' => 401,
                    'message' => $e->getMessage()
                ]);
            }
        }
        return response()->json([
            'status' => 200
        ]);
    }
}
